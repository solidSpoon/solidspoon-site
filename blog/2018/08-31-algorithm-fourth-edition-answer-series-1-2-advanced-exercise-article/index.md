---
slug: algorithm-fourth-edition-answer-series-1-2-advanced-exercise-article
title: 《算法-第四版》答案系列-1.2 提高题篇
authors: [solidSpoon]
tags: [算法第四版]
---

> 最近开始学习《算法-第四版》一书，将我自己做的书后习题分享给大家，本篇是这一系列的第二篇，包含了书上\<1.2 数据抽象\>的习题的提高题部分,本篇习题位于 P71 ~ P73 ，如有错误，还请指正。

>本篇答案中部分 java 代码用到了书中的包，如需使用请去书中配套网站安装。

以下的答案在电脑端查看可以显示目录

### 提高题

##### 文件输入。基于 `String` 的 `split()` 方法实现 `In` 中的静态方法 `readInts()`。

解答：

````java
public static int[] readInts(String name){
    IN in = new In(name);
    String input = in.readAll();
    String[] words = input.split("\\s+");
    int[] ints = new int[words.length];
    for(int i = 0; i < words.length; i++){
        ints[i] = Integer.parseInt(words[i]);
    }
    return ints;
}
````
我们会在 1.3 节中学习另一个不同的实现，（请见 1.3.1.5 节）。

##### 1.2.16 有理数。为有理数实现一个不可变数据类型 `Rational`，支持加减乘除操作。

````
=============================================================================
    public class Rational
-----------------------------------------------------------------------------
            Rational(int numerator, int denominator)
        Rational    plus(Rational b)                    该数与 b 之和
        Rational    minus(Rational b)                   该数与 b 之差
        Rational    times(Rational b)                   该数与 b 之积
        Rational    divides(Rational b)                 该数与 b 之商
        boolean     equals(Rational that)               该数与 that 相等码
        String      toString()                          对象的字符串表示
=============================================================================
````

无需测试溢出（请见练习 1.2.17），只需使用两个 `long` 型实例变量表示分子和分母来控制溢出的可能性。使用欧几里得算法来保证分子和分母没有公因子。编写一个测试用例检测你实现的所有方法。

````java
class Rational{
    private final long numerator;  //分子
    private final long denominator;  //分母
    
    public Rational(long numerator, long denominator){
        if (denominator == 0){
            throw new RuntimeException("Denominator is zero");
        }
        long f = euclidean(numerator, denominator);
        this.numerator = numerator / f;
        this.denominator = denominator / f;
    }
    
    private long euclidean(long a, long b){
        if (a == 0) return 1;
        if (a < 0) a = -a;
        if (b < 0) b = -b;
        if (a < b){
            long d = a;
            a = b;
            b = d;
        }
        long c = a % b;
        if (c != 0){
            return euclidean(b, c);
        } else {
            return b;
        }
    }
    
    public Rational plus(Rational b){
        long u = numerator * b.denominator + denominator * b.numerator;
        long d = denominator * b.denominator;
        return new Rational(u, d);
    }
    
    public Rational minus(Rational b){
        long u = numerator * b.denominator - denominator * b.numerator;
        long d = denominator * b.denominator;
        return new Rational(u, d);
    }
    
    public Rational times(Rational b){
        return new Rational(numerator * b.numerator, denominator * b.denominator);
    }
    
    public Rational divides(Rational b){
        return new Rational(numerator * b.denominator, denominator * b.numerator);
    }
    
    public boolean equals(Rational b){
        if (this == b) return true;
        if (b == null) return false;
        return (numerator == b.numerator && denominator == b.denominator); 
    }
    
    public String toString(){
        if (this.denominator == 1){
            return String.format("%d", this.numerator);
        }
        return String.format("%d/%d", this.numerator, this.denominator);
    }
}
public class q1216{
    public static void main(String[] args){
        System.out.println(6/ -3);
        Rational r = new Rational(2, -6);
        System.out.println(r);
        Rational r1 = new Rational(1, 5);
        Rational r2 = new Rational(-1, 15);
        System.out.println(r.plus(r1));
        System.out.println(r.plus(r2).plus(r1));
        System.out.println(r.minus(r1));
        System.out.println(r.times(r1));
        System.out.println(r.divides(r1));
        System.out.println(r.times(r1).equals(r2));
        r = new Rational(0, 2);
        System.out.println(r);
        System.out.println(r.plus(r1));
        
        r1 = new Rational(1, 3);
        r2 = new Rational(2, 3);
        System.out.println(r1.plus(r2));
        
        r1 = new Rational(1, 200000000);
        r2 = new Rational(1, 300000000);
        System.out.println(r1.plus(r2));
        
        r1 = new Rational(1073741789, 20);
        r2 = new Rational(1073741789, 30);
        System.out.println(r1.plus(r2));
    }
}
````

##### 有理数实现的健壮性。在 `Rational` (请见练习题 1.2.16) 的开发中使用断言来防止溢出。

再议

##### 累加器的方差。以下代码为 `Accumulator` 类添加了 `var()` 和 `stddev()` 方法，他们计算了 `addDataValue()` 方法的参数的方差和标准差，验证这段代码。

````java
public class Accumulator{
    public double m;
    private double s;
    private int N;
    public void addDataValue(double x){
        N++;
        s = s + 1.0 * (N-1) / N * (x-m) * (x -m);
        m = m + (x - m) / N;
    }
    public double mean(){
        return m;
    }
    public double var(){
        return s/(N - 1);
    }
    public double stddev(){
        return Math.aprt(this.var());
    }
}
````
与直接对所有数据的平方求和的方法相比较，这种实现能够更好地避免四舍五入产生的误差。

##### 1.2.19 字符串解析。为练习 1.2.13 中实现的 `Date` 和 `Transaction` 类型编写能够解析字符串数据的构造函数。它接受一个 `String` 参数指定的初始值，格式如表 1.2.20 所示。

````
                         表 1.2.20 被解析的字符串格式
=================================================================================
      类    型                  格    式                       举    例
---------------------------------------------------------------------------------
    Date             由斜杠分隔的整数                    5/22/1939
    Transaction      客户、日期和金额，由空白字符分隔      Turing 5/22/1939 11.99
=================================================================================
````
````java
部分解答：
public Date(String date){
    String[] fields = date.split("/");
    month = Integer.parseInt(fields[0]);
    day = Integer.parseInt(fields[1]);
    year = Integer.parseInt(fields[2]);
}
````
````java
    public Date(String date) {
        String[] fields = date.split("/");
        if (fields.length != 3) {
            throw new IllegalArgumentException("Invalid date");
        }
        month = Integer.parseInt(fields[0]);
        day   = Integer.parseInt(fields[1]);
        year  = Integer.parseInt(fields[2]);
    }
//--------------------------------------------------------------------------------
    public Transaction(String transaction) {
        String[] a = transaction.split("\\s+");
        who    = a[0];
        when   = new Date(a[1]);
        amount = Double.parseDouble(a[2]);
        if (Double.isNaN(amount) || Double.isInfinite(amount))
            throw new IllegalArgumentException("Amount cannot be NaN or infinite");
    }
````