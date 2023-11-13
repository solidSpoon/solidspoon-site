---
slug: algorithm-fourth-edition-answer-series-1-3-linked-list-exercises
title: 《算法-第四版》答案系列-1-3 链表练习
authors: [solidSpoon]
tags: [算法]
---

> 最近开始学习《算法-第四版》一书，将我自己做的书后习题分享给大家，本篇是这一系列的第二篇，包含了书上**1.3 背包、队列和栈**的习题的练习部分,本篇习题位于 P101 ~ P107 ，如有错误，还请指正。


>本篇答案中部分 java 代码用到了书中的包，如需使用请去书中配套网站安装。

<!-- more -->

以下的答案在电脑端查看可以显示目录

##### 1.3.18 假设 x 是一条链表的某个节点且不是尾节点。下面这条语句的效果是什么？

````java
x.next = x.next.next;
````
答：删除 x 的后续节点。

##### 1.3.19 给出一段代码，删除链表的尾节点，其中链表的首节点为 first。

##### 1.3.20 编写一个方法 `delete()`，接受一个 int 参数 k，删除链表的第 k 个元素（如果它存在的话）。

##### 1.3.21 编写一个方法 `find()`，接受一条链表和一个字符串 key 作为参数。如果链表中的某个节点的 item 域的值为 key， 则方法返回 truue，否则返回 false。

````java
import java.util.Iterator;

import edu.princeton.cs.algs4.StdOut;

public class algs1v3v18<Item> implements Iterable<Item>{
    private Node first = new Node();
    private Node last = first;
    int N = 0;

    private class Node{
        Item item;
        Node next;        
    }

    public boolean isEmpty(){
        return N==0;
    }

    public void add(Item item){
        Node oldlast = last;
        last = new Node();
        last.item = item;
        oldlast.next = last;
        N++;
    }

    public void deleteEnd(){
        Node end = first;
        while(end.next.next != null){
            end = end.next;
        }
        last = end;
        last.next = null;
        N--;
    }

    public void delete(int k){
        if (k < N){
            Node here = first;
             for (int i = 1; i < k; i++){
                here = here.next;
             }
             here.next = here.next.next;
        } else if (k == N){
            deleteEnd();
        }
    }
    public boolean find(Item st){
        for (Node x = first.next; x != null; x = x.next){
            if (x.item.equals(st)){
                return true;
            }
        }
        return false;
    }

    public Iterator<Item> iterator(){
        return new ListIterator();
    }
    private class ListIterator implements Iterator<Item>{
        private Node current = first.next;

		@Override
		public boolean hasNext() {
			return current != null;
		}

		@Override
		public Item next() {
            Item item = current.item;
            current = current.next;
            return item;
		}

    }

    public static void main(String[] args){
        algs1v3v18<Integer> list = new algs1v3v18<Integer>();
        for(int i = 1; i <= 10; i++){
            list.add(i);
        }
        for(int c : list){
            StdOut.print(c + " ");
        }
        StdOut.println();

        list.deleteEnd();
        for(int c : list){
            StdOut.print(c + " ");
        }
        StdOut.println();

        list.delete(9);
        for(int c : list){
            StdOut.print(c + " ");
        }
        StdOut.println();

        StdOut.println(list.find(2) + " " + list.find(11));
    }    
}
````

##### 1.3.22 假设 x 是一条链表中的某个节点，下面这段代码做了什么？

````java
t.next = x.next;
x.next = t;
````

答：插入节点 t 并使它成为 x 的后续节点。

##### 1.3.23 为什么下面这段代码和上一道题中的代码效果不同？

````java
x.net = t;
t.next = x.next;
````

答：在更新 `t.next` 时，`x.next` 已经不再指向 x 的后续节点，而是指向 t 本身！

##### 1.3.24 编写一个方法