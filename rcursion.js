function sum(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * n + sum(n - 1);
    }
}

document.write(sum(5));