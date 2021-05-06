def fib(n)
  a = 1
  b = 0
  p = 0
  q = 1

  while n.abs > 0
    if n % 2 == 0
      if (n>0)
        p = p**2 + q**2
        q = 2*p*q + q**2
      else
        p = q**2 - p**2
        q = q**2 - 2*p*q
      end
      n /= 2
    else
      if n>0
        a = b*q + a*q + a*p
        b = b*p + a*q
      else
        a = b*q + a*q - a*p
        b = b*p - a*q
      end
      n = n > 0 ? n-1 : n+1
    end
  end
  b
end
