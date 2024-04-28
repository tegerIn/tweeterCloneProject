-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" INTEGER,
    "profile" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Tweet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "contents" TEXT NOT NULL,
    "photo" TEXT,
    "viewCount" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Liked" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "tweetId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Retweet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "tweetId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_TweetToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_TweetToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Tweet" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TweetToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_LikedToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_LikedToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Liked" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LikedToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_LikedToTweet" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_LikedToTweet_A_fkey" FOREIGN KEY ("A") REFERENCES "Liked" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LikedToTweet_B_fkey" FOREIGN KEY ("B") REFERENCES "Tweet" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_RetweetToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_RetweetToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Retweet" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RetweetToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_RetweetToTweet" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_RetweetToTweet_A_fkey" FOREIGN KEY ("A") REFERENCES "Retweet" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RetweetToTweet_B_fkey" FOREIGN KEY ("B") REFERENCES "Tweet" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "_TweetToUser_AB_unique" ON "_TweetToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TweetToUser_B_index" ON "_TweetToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LikedToUser_AB_unique" ON "_LikedToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_LikedToUser_B_index" ON "_LikedToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LikedToTweet_AB_unique" ON "_LikedToTweet"("A", "B");

-- CreateIndex
CREATE INDEX "_LikedToTweet_B_index" ON "_LikedToTweet"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RetweetToUser_AB_unique" ON "_RetweetToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RetweetToUser_B_index" ON "_RetweetToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RetweetToTweet_AB_unique" ON "_RetweetToTweet"("A", "B");

-- CreateIndex
CREATE INDEX "_RetweetToTweet_B_index" ON "_RetweetToTweet"("B");
