-- CreateTable
CREATE TABLE "CreditCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "cvv" TEXT NOT NULL,
    "expMonth" INTEGER NOT NULL,
    "expYear" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CreditCard_number_key" ON "CreditCard"("number");
