var zongshu = 0;
var now1 = new Date().getTime();
var hanta = function (n, src, aux, dest) {
    if (n > 0) {
        hanta(n - 1, src, dest, aux);
        console.log("第" + zongshu + "步，移动第" + n + "个圆盘从" + src + "到" + dest)
        zongshu += 1;
        hanta(n - 1, aux, src, dest);
    }
}
hanta(24, "A", "B", "C");
var now2 = new Date().getTime();
console.log("执行次数：" + zongshu)
console.log("执行时间", now2 - now1);