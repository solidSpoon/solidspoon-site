---
slug: algorithm-fourth-edition-answer-series-1-3-exercise-article
title: 文章排版指南
authors: [solidSpoon]
tags: [算法]
---

> 最近开始学习《算法-第四版》一书，将我自己做的书后习题分享给大家，本篇是这一系列的第二篇，包含了书上\<1.3 背包、队列和栈\>的习题的练习部分,本篇习题位于 P101 ~ P107 ，如有错误，还请指正。

>本篇答案中部分 java 代码用到了书中的包，如需使用请去书中配套网站安装。

<!-- more -->

以下的答案在电脑端查看可以显示目录

##### 为 `FixedCapacityStackOfStrings` 添加一个方法 `isFull()`。

````java
public boolean isFull(){
return N == a.length;
}
````

##### 1.3.2 给定以下输入，`java Stack` 的输出是什么?

was best  times of the was the it

##### 1.3.3 假设某个用例程序会进行一系列入栈和出栈的混合栈操作。入栈操作会将证书 0 到 9 按顺序压入栈；出栈操作会打印出返回值。下面哪种序列是不可能产生的？

````
a. 4 3 2 1 0 9 8 7 6 5
b. 4 6 8 7 5 3 2 9 0 1
c. 2 5 6 7 4 8 9 3 1 0
d. 4 3 2 1 0 5 6 7 8 9
e. 1 2 3 4 5 6 9 8 7 0
f. 0 4 6 5 3 8 1 7 2 9
g. 1 4 7 9 8 6 5 3 0 2
h. 2 1 4 3 6 5 8 7 9 0
````

编写以下程序帮助我们判断：

````java
import edu.princeton.cs.algs4.*;
public class q133{
public static void main(String[] args){
StdOut.println("请输入判断的数据：")；
int[] num = new int[10]; //选项数组
for (int i = 0; i < 10; i++){
num[i] = StdIn.readInt();
}
Stack<Integer> detection = new Stack<Integer>(); //检测栈
    int[] ans = new int[10]; //结果数组
    for (int i = 0, n = 0, a = 0; i < 10; i++){
    if (i != num[n]){
    detection.push(i);
    } else {
    int c = 0;
    do {
    ans[a] = num[n];
    a++;
    n++;
    if (!detection.isEmpty()){
    c = detection.pop();
    detection.push(c);
    }
    } while (!detection.isEmpty() && detection.pop() == num[n]);
    if (!detection.isEmpty()){
    detection.push(c);
    }
    }
    }
    int s = 0;
    for (int p = 0; p < 10; p++ ){
    if (ans[p] != num[p]){
    s = 1;
    StdOut.print("false");
    break;
    }
    }
    if (s == 0){
    StdOut.print("true");
    }

    }
    ````
    ````
    运行结果：
    a: true
    b: false
    c: true
    d: true
    e: true
    f: false
    g: false
    h: true
    ````

    ##### 1.3.4 编写一个 `Stack` 的用例 `Parehtheses` 从标准输入中读取文本流并使用栈判定其中的括号是否配对完整。例如，对于 `[()]{}{[()()]()}` 程序应该打印 `true` 对于 `[(])` 则应打印 `false`。

    ````java
    import edu.princeton.cs.algs4.Stack;
    import edu.princeton.cs.algs4.StdIn;
    import edu.princeton.cs.algs4.StdOut;

    public class q134 {
    public static void main(String[] args){
    Stack<String> sta = new Stack<String>();
        boolean ans = true;
        while (!StdIn.isEmpty()){
        //读取字符串，如果是左括号则压入栈
        //括号之间以空格分开
        String s = StdIn.readString();
        if (s.equals("(")){
        sta.push(s);
        }else if (s.equals("{")){
        sta.push(s);
        }else if (s.equals("[")){
        sta.push(s);
        // 如果是右括号则弹出一个运算符
        }else if (s.equals("]")){
        ans = s.equals(sta.pop());
        }else if (s.equals("}")){
        ans = s.equals(sta.pop());
        }else if (s.equals(")")){
        ans = s.equals(sta.pop());
        }
        }
        StdOut.print(ans);
        }
        }
        ````

        ##### 1.3.5 当 N 为 50 时下面段代码会打印什么？从较高抽象层次描述给定正整数 N 时这段代码的行为。

        ````
        Stack<Integer> stack = new Stack<Integer>;
            while (N > 0){
            stack.push(N % 2);
            N = N / 2；
            }
            for (int d : stack){
            StdOut.println();
            }
            ````
            答：打印 N 的二进制表示（当 N 为 50 时打印 110010）。

            ##### 1.3.6 下面这段代码对队列 q 进行了什么操作？

            ````
            Stack<String> stack = new Stack<String>();
                while (!q.isEmpty()){
                stack.push(q.dequeue());
                }
                while (!stack.isEmpty()){
                q.enqueue(stack.pop());
                }
                ````

                答：对队列 q 进行了前后颠倒位置的操作。

                ##### 1.3.7 为 `Stack` 添加一个方法 `peek()`，返回栈中最近添加的元素（而不弹出它）。

                ````
                public Item peek(){
                Item item = a[N];
                return item;
                }
                ````

                ##### 1.3.8 给定以下输入，给出 `DoublingStackOfStrings` 的数组的内容和大小。

                it was - the best - of times - - - it was - the - -

                ````java

                /*************************************************************************
                *  Compilation:  javac DoublingStackOfStrings.java
                *  Execution:    java DoublingStackOfStrings
                *
                *  Stack of strings implementation with an array.
                *  Resizes by doubling and halving.
                *
                *************************************************************************/

                import java.util.Iterator;
                import java.util.NoSuchElementException;

                import edu.princeton.cs.algs4.StdIn;
                import edu.princeton.cs.algs4.StdOut;

                public class DoublingStackOfStrings implements Iterable<String> {
                    private String[] a;
                    private int N;

                    public DoublingStackOfStrings() {
                    a = new String[2];
                    N = 0;
                    }

                    // is the stack empty?
                    public boolean isEmpty() {  return (N == 0);  }

                    // resize the underlying array holding the elements
                    private void resize(int capacity) {
                    String[] temp = new String[capacity];
                    for (int i = 0; i < N; i++) {
                    temp[i] = a[i];
                    }
                    a = temp;
                    }

                    // push a new item onto the stack
                    public void push(String item) {
                    if (N == a.length) resize(2*a.length);
                    a[N++] = item;
                    }

                    // delete and return the item most recently added
                    public String pop() {
                    if (isEmpty()) {
                    throw new RuntimeException("Stack underflow error");
                    }
                    String item = a[--N];
                    a[N] = null;  // to avoid loitering
                    if (N > 0 && N == a.length/4) resize(a.length/2);
                    return item;
                    }

                    public Iterator<String> iterator() {
                        return new ReverseArrayIterator();
                        }

                        public int size(){
                        return N;
                        }


                        // an iterator, doesn't implement remove() since it's optional
                        private class ReverseArrayIterator implements Iterator<String> {
                            private int i = N;
                            public boolean hasNext() {
                            return i > 0;
                            }
                            public void remove() {
                            throw new UnsupportedOperationException();
                            }

                            public String next() {
                            if (!hasNext()) throw new NoSuchElementException();
                            return a[--i];
                            }

                            }

                            // test client
                            public static void main(String[] args) {
                            DoublingStackOfStrings s = new DoublingStackOfStrings();
                            while (!StdIn.isEmpty()) {
                            String item = StdIn.readString();
                            if (!item.equals("-")) {
                            s.push(item);
                            } else if (s.isEmpty()) {
                            StdOut.println("BAD INPUT");
                            } else {
                            s.pop();
                            }
                            }
                            StdOut.println(s.size());

                            while (!s.isEmpty()){
                            StdOut.println(s.pop());
                            }
                            }

                            }
                            ````

                            运行结果

                            ````
                            1
                            it
                            ````

                            ##### 编写一段程序，从标准输入得到一个缺少左括号的表达式并打印出补全括号之后的中序表达式。

                            ````

                            例如，给定输入：
                            1 + 2 ) * 3 - 4 ) * 5 - 6 ) ) )

                            你的程序应该输出：
                            ( ( 1 + 2)  *  ( ( 3 - 4) * ( 5 - 6 ) ) )

                            ````

                            ````java
                            import edu.princeton.cs.algs4.Stack;
                            import edu.princeton.cs.algs4.StdIn;
                            import edu.princeton.cs.algs4.StdOut;

                            public class algs1v3v9 {
                            public static void main(String[] args){
                            // 运算符
                            Stack<String> ops = new Stack<String>();
                                // 数
                                Stack<String> vals = new Stack<String>();
                                    while (!StdIn.isEmpty()){
                                    // 将运算符压入栈
                                    String s = StdIn.readString();
                                    boolean isOps = s.equals("+") || s.equals("-") || s.equals("*") || s.equals("sqrt");
                                    if (isOps){
                                    ops.push(s);
                                    } else if (s.equals(")")){
                                    // 拼接并压入栈
                                    String op = ops.pop();
                                    String v = vals.pop();
                                    v = "( " + vals.pop() + " " + op + " " + v + " )";
                                    vals.push(v);
                                    }
                                    else vals.push(s);
                                    }
                                    StdOut.println(vals.pop());
                                    }
                                    }
                                    ````

                                    ##### 1.3.10 编写一个过滤器 `InfixToPostFix`，将算数表达式由中序表达式转为后续表达式。

                                    ````java
                                    import edu.princeton.cs.algs4.Stack;
                                    import edu.princeton.cs.algs4.StdIn;
                                    import edu.princeton.cs.algs4.StdOut;

                                    public class InfixToPostfix {
                                    public static void main(String[] args){
                                    // 运算符
                                    Stack<String> ops = new Stack<String>();
                                        // 数
                                        Stack<String> vals = new Stack<String>();
                                            while (!StdIn.isEmpty()){
                                            // 将运算符压入栈
                                            String s = StdIn.readString();
                                            boolean isOps = s.equals("+") || s.equals("-") || s.equals("*") || s.equals("sqrt") ||s.equals("/");

                                            if (isOps){
                                            ops.push(s);
                                            } else if(s.equals("(")) {

                                            } else if (s.equals(")")){
                                            // 拼接并压入栈
                                            String op = ops.pop();
                                            String v = vals.pop();
                                            v = vals.pop() + " " + v + " " + op;
                                            vals.push(v);
                                            }
                                            else vals.push(s);
                                            }
                                            StdOut.println(vals.pop());
                                            }

                                            ````

                                            ````
                                            1 2 + 3 4 - 5 6 - * *
                                            ````

                                            ##### 1.3.11 编写一段程序 `EvaluatePostfix`，从标准输入中得到一个后序表达式，求值并打印结果（将上一题的程序中得到的输出用管道传递给这一段程序可以得到和 `Evaluate` 相同的行为）。

                                            ````java
                                            import edu.princeton.cs.algs4.Stack;
                                            import edu.princeton.cs.algs4.StdIn;
                                            import edu.princeton.cs.algs4.StdOut;

                                            public class Evaluate {
                                            public static void main(String[] args){
                                            Stack<Double> vals = new Stack<Double>();
                                                while (!StdIn.isEmpty()){
                                                String s = StdIn.readString();
                                                if(s.equals("+")){
                                                double v = vals.pop();
                                                v = vals.pop() + v;
                                                vals.push(v);
                                                } else if (s.equals("-")){
                                                double v = vals.pop();
                                                v = vals.pop() - v;
                                                vals.push(v);
                                                } else if (s.equals("*")){
                                                double v = vals.pop();
                                                v = vals.pop() * v;
                                                vals.push(v);
                                                } else if (s.equals("/")){
                                                double v = vals.pop();
                                                v = vals.pop() / v;
                                                vals.push(v);
                                                } else if (s.equals("sqrt")){
                                                double v = vals.pop();
                                                v = Math.sqrt(v);
                                                vals.push(v);
                                                } else {
                                                vals.push(Double.parseDouble(s));
                                                }
                                                }
                                                StdOut.println(vals.pop());
                                                }
                                                }
                                                ````
                                                未完待续···
