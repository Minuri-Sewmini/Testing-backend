# Node.js version එක තෝරාගැනීම
FROM node:20

# Container එක ඇතුළේ වැඩ කරන folder එක
WORKDIR /usr/src/app

# Dependencies copy කර install කිරීම
COPY package*.json ./
RUN npm install

# මුළු Code එකම copy කිරීම
COPY . .

# ඇප් එක run වන Port එක (ඔබේ code එකේ 5000 නිසා)
EXPOSE 5000

# ඇප් එක start කරන command එක
CMD ["node", "index.js"]