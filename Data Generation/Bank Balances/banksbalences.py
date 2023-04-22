import numpy as np
import random


for i in range (1000):
    file = open("balences.txt","a", encoding="utf8")
    meantotal = 5000
    std_devtotal = 1250
    total = round(np.random.normal(loc=meantotal, scale=std_devtotal))
    file.write(str(total) + "\n")
    file.close()
