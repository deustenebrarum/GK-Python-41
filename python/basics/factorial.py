number = int(input())

_product = 1

current = 1
while current <= number:
    _product *= current
    current += 1

print(_product)
