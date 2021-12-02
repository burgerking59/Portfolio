import tkinter as tk
from tkinter import ttk
import time
def fbtod():
    number = n1.get()
    length = len(number)-1
    b = 2**length
    denary = 0
    n = 0
    while n <= length:
        if number[length-(length-n)] == "1":
            denary = denary + b
            n = n + 1
            b = b/2
        elif number[length-(length-n)] == "0":
            n = n + 1
            b = b/2
        else:
            denary = "That is not binary"
            return
    answer1["text"] = f"{denary}"
def fdtob():
    number = n2.get()
    import math
    number = int(number)
    binary = ""
    n = (int(math.log2(number)+1))
    power = 2**(n-1)
    for x in range(n):
        if number >= power:
            binary = binary + "1"
            number = number - power
            power = power/2
        else:
            binary = binary + "0"
            power = power/2
    answer2["text"] = f"{binary}"
def fbtoh():
    number = n3.get()
    length = len(number)
    hexi = ""
    n = 0
    x = True
    while x == True:
        if length%4 != 0:
            number = number[::-1]
            number = number + "0"
            number = number[::-1]
            length = len(number)
        else:
            for x in range(int(length/4)):
                if number[length-(length-n):(length-(length-n))+4] == "0001":
                    hexi = hexi + "1"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "0010":
                    hexi = hexi + "2"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "0011":
                    hexi = hexi + "3"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "0100":
                    hexi = hexi + "4"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "0101":
                    hexi = hexi + "5"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "0110":
                    hexi = hexi + "6"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "0111":
                    hexi = hexi + "7"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "1000":
                    hexi = hexi + "8"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "1001":
                    hexi = hexi + "9"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "0000":
                    hexi = hexi + "0"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "1010":
                    hexi = hexi + "A"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "1011":
                    hexi = hexi + "B"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "1100":
                    hexi = hexi + "C"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "1101":
                    hexi = hexi + "D"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "1110":
                    hexi = hexi + "E"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "1111":
                    hexi = hexi + "F"
                    n = n + 4
            x = False
    answer3["text"] = f"{hexi}"    
def fhtob():
    number = n4.get()
    binary = ""
    n = 0
    for x in range(len(number)):
        if number[len(number)-(len(number)-n)] == "1":
            binary = binary + "0001"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "2":
            binary = binary + "0010"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "3":
            binary = binary + "0011"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "4":
            binary = binary + "0100"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "5":
            binary = binary + "0101"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "6":
            binary = binary + "0110"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "7":
            binary = binary + "0111"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "8":
            binary = binary + "1000"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "9":
            binary = binary + "1001"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "A":
            binary = binary + "1010"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "B":
            binary = binary + "1011"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "C":
            binary = binary + "1100"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "D":
            binary = binary + "1101"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "E":
            binary = binary + "1110"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "F":
            binary = binary + "1111"
            n = n + 1
    answer4["text"] = f"{binary}"
def fhtod():
    number = n5.get()
    binary = ""
    n = 0
    for x in range(len(number)):
        if number[len(number)-(len(number)-n)] == "1":
            binary = binary + "0001"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "2":
            binary = binary + "0010"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "3":
            binary = binary + "0011"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "4":
            binary = binary + "0100"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "5":
            binary = binary + "0101"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "6":
            binary = binary + "0110"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "7":
            binary = binary + "0111"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "8":
            binary = binary + "1000"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "9":
            binary = binary + "1001"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "A":
            binary = binary + "1010"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "B":
            binary = binary + "1011"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "C":
            binary = binary + "1100"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "D":
            binary = binary + "1101"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "E":
            binary = binary + "1110"
            n = n + 1
        elif number[len(number)-(len(number)-n)] == "F":
            binary = binary + "1111"
            n = n + 1
    length = len(binary)-1
    b = 2**length
    denary = 0
    n = 0
    while n <= length:
        if binary[length-(length-n)] == "1":
            denary = denary + b
            n = n + 1
            b = b/2
        else:
            n = n + 1
            b = b/2
    answer5["text"] = f"{denary}"

def fdtoh():
    binary = n6.get()
    import math
    binary = int(binary)
    number = ""
    n = (int(math.log2(binary)+1))
    power = 2**(n-1)
    for x in range(n):
        if binary >= power:
            number = number + "1"
            binary = binary - power
            power = power/2
        else:
            number = number + "0"
            power = power/2
    length = len(number)
    hexi = ""
    n = 0
    x = True
    while x == True:
        if length%4 != 0:
            number = number[::-1]
            number = number + "0"
            number = number[::-1]
            length = len(number)
        else:
            for x in range(int(length/4)):
                if number[length-(length-n):(length-(length-n))+4] == "0001":
                    hexi = hexi + "1"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "0010":
                    hexi = hexi + "2"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "0011":
                    hexi = hexi + "3"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "0100":
                    hexi = hexi + "4"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "0101":
                    hexi = hexi + "5"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "0110":
                    hexi = hexi + "6"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "0111":
                    hexi = hexi + "7"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "1000":
                    hexi = hexi + "8"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "1001":
                    hexi = hexi + "9"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "0000":
                    hexi = hexi + "0"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "1010":
                    hexi = hexi + "A"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "1011":
                    hexi = hexi + "B"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "1100":
                    hexi = hexi + "C"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "1101":
                    hexi = hexi + "D"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "1110":
                    hexi = hexi + "E"
                    n = n + 4
                elif number[length-(length-n):(length-(length-n))+4] == "1111":
                    hexi = hexi + "F"
                    n = n + 4
            x = False
    answer6["text"] = f"{hexi}"
master = tk.Tk()
title = tk.Label(master, text="Number Converter")
title.grid(row = 0, sticky=tk.E+tk.W)
tab_control = ttk.Notebook(master)
tab1 = ttk.Frame(tab_control)
tab2 = ttk.Frame(tab_control)
tab3 = ttk.Frame(tab_control)
tab4 = ttk.Frame(tab_control)
tab5 = ttk.Frame(tab_control)
tab6 = ttk.Frame(tab_control)
tab_control.add(tab1, text = 'Binary to Denary')
tab_control.add(tab2, text = 'Denary to Binary')
tab_control.add(tab3, text = 'Binary to Hexadecimal')
tab_control.add(tab4, text = 'Hexadecimal to Binary')
tab_control.add(tab5, text = 'Hexadecimal to Denary')
tab_control.add(tab6, text = 'Denary to Hexadecimal')
tab_control.grid(row = 1, sticky=tk.E+tk.W)
n1 = tk.Entry(tab1)
n1.pack()
n2 = tk.Entry(tab2)
n2.pack()
n3 = tk.Entry(tab3)
n3.pack()
n4 = tk.Entry(tab4)
n4.pack()
n5 = tk.Entry(tab5)
n5.pack()
n6 = tk.Entry(tab6)
n6.pack()
btod = ttk.Button(tab1, text = "Enter", command = fbtod).pack()
dtob = ttk.Button(tab2, text = "Enter", command = fdtob).pack()
btoh = ttk.Button(tab3, text = "Enter", command = fbtoh).pack()
htob = ttk.Button(tab4, text = "Enter", command = fhtob).pack()
htod = ttk.Button(tab5, text = "Enter", command = fhtod).pack()
dtoh = ttk.Button(tab6, text = "Enter", command = fdtoh).pack()
answer1 = tk.Label(tab1, text="")
answer1.pack()
answer2 = tk.Label(tab2, text="")
answer2.pack()
answer3 = tk.Label(tab3, text="")
answer3.pack()
answer4 = tk.Label(tab4, text="")
answer4.pack()
answer5 = tk.Label(tab5, text="")
answer5.pack()
answer6 = tk.Label(tab6, text="")
answer6.pack()
master.mainloop()
