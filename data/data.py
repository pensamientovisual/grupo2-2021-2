import matplotlib.pyplot as plt
import pandas as pd
import os.path as path

name = input()
data = pd.read_csv(path.join('data','data', f"{name}.csv"))
plot = plt.plot(data['Ano'], data['Valor (mm)'])
plt.savefig(f"data\graficos\{name}.png")
