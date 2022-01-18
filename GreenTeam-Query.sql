CREATE TABLE Amentities (
    Amenity_ID INT IDENTITY(1, 1) NOT NULL,
    Amen_Type VARCHAR(5000) NOT NULL,
    PRIMARY KEY (Amenity_ID)
);

CREATE TABLE Special_Needs (
    Need_ID INT IDENTITY(1, 1) NOT NULL,
    Need_Type VARCHAR(1000),
    PRIMARY KEY (Need_ID)
);

CREATE TABLE Unit_Type (
    Unit_Type_ID INT IDENTITY(1,1) NOT NULL,
    Type_Description VARCHAR(2000),
    PRIMARY KEY (Unit_Type_ID)
);

CREATE TABLE Photos (
    Image_ID INT IDENTITY(1,1) NOT NULL,
    Picture VARCHAR(5000) NOT NULL,
    Unit_ID INT NOT NULL,
    PRIMARY KEY (Image_ID)
);

CREATE TABLE User_Type (
    User_Type_ID INT IDENTITY(1,1) NOT NULL,
    User_Type VARCHAR(200),
    PRIMARY KEY(User_Type_ID)
);

CREATE TABLE Customer_Cats (
    Cat_ID INT IDENTITY(1,1) NOT NULL,
    [User_ID] INT NOT NULL,
    [Name] VARCHAR(2000) NOT NULL,
    Breed VARCHAR(1000) NOT NULL,
    Sex VARCHAR(500),
    PRIMARY KEY (Cat_ID)
);

CREATE TABLE Users (
    [User_ID] INT IDENTITY(1,1) NOT NULL,
    First_Name VARCHAR(1000) NOT NULL,
    Last_Name VARCHAR(1000) NOT NULL,
    [Password] VARCHAR(2000) NOT NULL,
    Email VARCHAR(2000) NOT NULL,
    User_Type_ID INT NOT NULL,
    PRIMARY KEY (User_ID)
);

CREATE TABLE Cat_Needs (
    Need_ID INT NOT NULL,
    Cat_ID INT NOT NULL,
    PRIMARY KEY (Need_ID, Cat_ID)
);

CREATE TABLE Stay_Log (
    Stay_Log_ID INT IDENTITY(1,1) NOT NULL,
    Unit_ID INT NOT NULL,
    Cat_ID INT NOT NULL,
    Check_In_Date DATE NOT NULL,
    Check_Out_Date DATE NOT NULL,
    Total MONEY NOT NULL,
    Approval_ID INT NOT NULL,
    PRIMARY KEY (Stay_Log_ID)
);

CREATE TABLE Approval_Status (
    Approval_ID INT IDENTITY(1,1) NOT NULL,
    Approval_Status VARCHAR(1000),
    PRIMARY KEY (Approval_ID)
);

CREATE TABLE Units (
    Unit_ID INT IDENTITY(1, 1) NOT NULL,
    Unit_Type_ID INT NOT NULL,
    Owner_ID INT NOT NULL,
    [Address] VARCHAR(2000) NOT NULL,
    City VARCHAR(1000) NOT NULL,
    [State] VARCHAR(1000) NOT NULL,
    Zip_Code INT NOT NULL,
    Unit_Description VARCHAR(3000),
    Price_Night_Cat MONEY NOT NULL,
    Max_Guests INT NOT NULL,
    PRIMARY KEY(Unit_ID)
);

CREATE TABLE Comments (
    Comment_ID INT IDENTITY(1,1) NOT NULL,
    Unit_ID INT NOT NULL,
    Guest_ID INT NOT NULL,
    Review VARCHAR NOT NULL,
    Rating FLOAT NOT NULL,
    Post_Date_Time DATETIME NOT NULL,
    PRIMARY KEY (Comment_ID)
);

--Add Foreign Keys

--Photos
ALTER TABLE Photos ADD CONSTRAINT FK_Photos_Unit_ID FOREIGN KEY(Unit_ID) REFERENCES Units(Unit_ID);

--Customer_Cats
ALTER TABLE Customer_Cats ADD CONSTRAINT FK_Customer_Cats_User_ID FOREIGN KEY(User_ID) REFERENCES Users(User_ID);

--Cat_Needs
ALTER TABLE Cat_Needs ADD CONSTRAINT FK_Cat_Needs_Need_ID FOREIGN KEY(Need_ID) REFERENCES Special_Needs(Need_ID);
ALTER TABLE Cat_Needs ADD CONSTRAINT FK_Cat_Needs_Cat_ID FOREIGN KEY(Cat_ID) REFERENCES Customer_Cats(Cat_ID);

--Stay Log
ALTER TABLE Stay_Log ADD CONSTRAINT FK_Stay_Log_Cat_ID FOREIGN KEY(Cat_ID) REFERENCES Customer_Cats(Cat_ID);
ALTER TABLE Stay_Log ADD CONSTRAINT FK_Stay_Log_Unit_ID FOREIGN KEY(Unit_ID) REFERENCES Units(Unit_ID);
ALTER TABLE Stay_Log ADD CONSTRAINT FK_Stay_Log_Approved FOREIGN KEY(Approval_ID) REFERENCES Approval_Status(Approval_ID);

--Units
ALTER TABLE Units ADD CONSTRAINT FK_Units_Unit_Type_ID FOREIGN KEY(Unit_Type_ID) REFERENCES Unit_Type(Unit_Type_ID);
ALTER TABLE Units ADD CONSTRAINT FK_Units_Owner_ID FOREIGN KEY(Owner_ID) REFERENCES Users(User_ID);

--Comments
ALTER TABLE Comments ADD CONSTRAINT FK_Comments_Guest_ID FOREIGN KEY(Guest_ID) REFERENCES Users(User_ID);
ALTER TABLE Comments ADD CONSTRAINT FK_Comments_Unit_ID FOREIGN KEY(Unit_ID) REFERENCES Units(Unit_ID);

INSERT INTO Amentities(Amen_Type) VALUES
('Drinking Fountain'), --1
('Interactive Toys'), --2
('Scratch Post'), --3
('Automatic Litterbox'), --4
('Indoor Plants'), --5
('Cat Balcony'), --6
('Wall Furniture/Catwalks'), --7
('Cat Condo'); --8

INSERT INTO Special_Needs(Need_Type) VALUES
('Diabetic'), --1
('Mobility'), --2
('Oral Medication'), --3
('Deaf'), --4
('Blind'), --5
('Other'); --6

INSERT INTO Unit_Type(Type_Description) VALUES
('Condo'), --1
('Townhouse'), --2
('House'), --3
('Mobile Home'), --4
('Apartment'); --5

INSERT INTO Approval_Status(Approval_Status) VALUES
('Approved'), --1
('Rejected'), --2
('Pending'); --3

INSERT INTO User_Type(User_Type) VALUES
('Guest'), --1
('Owner'); --2

SELECT * FROM Amentities;
SELECT * FROM Special_Needs;
SELECT * FROM Unit_Type;
SELECT * FROM Approval_Status;
SELECT * FROM User_Type;