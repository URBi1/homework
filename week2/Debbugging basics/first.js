function foo(a,b,c){
    return a+b+c;
}

function boo(a,c){
    var d = c + 2;
    var x = foo(a,c,d);
    return x-d;
}

function goo(x){
    var y = boo(x, 3);
    return y + foo(y,y,y);
}

function moo(n, k){
    return goo(n) + too(k);
}

function too(j){
    return j * 2;
}

function zoo(z){
    return too(z);
}

function noo(a,b){
    if (boo(a,b) * 3.7 > 5887){
        return moo(4, koo(b));
    }
    return boo(a,b) + 4.66;
}

function koo(d){
    var f = zoo(d) * 5.3;
    return f * 1.2;
}

var r = goo(5);
var w = r + too(3) + zoo(r) + boo(r, too(712));
var q = foo(r, w, 4) + koo(34) + noo(w,r);


