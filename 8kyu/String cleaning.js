function stringClean(s){
    while(s.indexOf(0) >= 0) {s = s.replace(0, '')}
      while(s.indexOf(1) >= 0) {s = s.replace(1, '')}
        while(s.indexOf(2) >= 0)  {s = s.replace(2, '')}
          while(s.indexOf(3) >= 0)  {s = s.replace(3, '')}
             while(s.indexOf(4) >= 0)  {s = s.replace(4, '')}
                while(s.indexOf(5) >= 0)  {s = s.replace(5, '')}
                   while (s.indexOf(6) >= 0)  {s = s.replace(6, '')}
                      while (s.indexOf(7) >= 0)  {s = s.replace(7, '')}
                         while (s.indexOf(8) >= 0)  {s = s.replace(8, '')}
                            while (s.indexOf(9) >= 0)  {s = s.replace(9, '')}
    return s
   }