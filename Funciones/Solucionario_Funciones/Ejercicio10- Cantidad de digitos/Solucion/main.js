// Escribe aquí tu codigo Javascript

function cantidadDigitos(x)
  {
    if (x<10)
    {
      return 1;
    }
    else
    {
      if (x<100)
      {
        return 2;
      }
      else
      {
        if (x<1000)
        {
          return 3;
        }
        else
        {
          if (x<10000)
          {
            return 4;
          }
          else
          {
            if (x<100000)
            {
              return 5;
            }
            else
            {
              if (x<1000000)
              {
                return 6;
              }
              else
              {
                if (x<10000000)
                {
                  return 7;
                }
                else
                {
                  if (x<100000000)
                  {
                    return 8;
                  }
                  else
                  {
                    if (x<1000000000)
                    {
                      return 9;
                    }
                    else
                    {
                      if (x<10000000000)
                      {
                        return 10;
                      }
                      else
                      {
                        if (x<100000000000)
                        {
                          return 11;
                        }
                        else
                        {
                          if (x<1000000000000)
                          {
                            return 12;
                          }
                          else
                          {
                            if (x<10000000000000)
                            {
                              return 13;
                            }
                            else
                            {
                              if (x<100000000000000)
                              {
                                return 14;
                              }
                              else
                              {
                                if (x<1000000000000000)
                                {
                                  return 15;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  var valor;
  valor=prompt('Ingrese un valor positivo:','');
  valor=parseInt(valor);
  document.write('La cantidad de dígitos del valor ingresado es:'+cantidadDigitos(valor));


