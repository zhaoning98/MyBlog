Uncaught RangeError: Maximum call stack size exceeded
意思为：堆栈溢出

发生原因：
递归次数过多，没有正确的退出递归造成堆栈溢出

解决方法：
减少递归次数，使用其他方法解决问题
恰当的时机返回，避免由于返回条件不正确导致的堆栈溢出

## splice(index, howmany, item1, ..., itemX)
splice() 方法会直接对数组进行修改，与 slice() 方法不同
