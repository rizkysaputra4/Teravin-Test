DROP DATABASE "employee";
CREATE DATABASE employee; 
 \c employee

CREATE OR REPLACE FUNCTION f_yearmonth_id(y text = to_char(now(), 'YYMM'))
  RETURNS text AS
$func$
BEGIN

LOOP
   BEGIN
      RETURN y || to_char(nextval('year_'|| y ||'_seq'), 'FM0000');

   EXCEPTION WHEN undefined_table THEN 
      EXECUTE 'CREATE SEQUENCE year_' || y || '_seq MINVALUE 1 START 1';
   END;
END LOOP;

END
$func$ LANGUAGE plpgsql VOLATILE;

CREATE TABLE employee (
	employee_id VARCHAR PRIMARY KEY DEFAULT f_yearmonth_id(),
	name VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
    mobile VARCHAR UNIQUE NOT NULL,
	birthdate DATE NOT NULL,
    address VARCHAR 
);

INSERT INTO employee (name,mobile,email,address,birthdate) VALUES ('Samuel Bryan','+6230723864306','facilisis.Suspendisse.commodo@eratEtiam.ca','Ap #237-8786 Massa. Rd.','2006-10-24'),('Tucker Mejia','+6263356691687','id.mollis.nec@Phasellusvitaemauris.com','2726 Leo. Av.','1995-12-11'),('Caleb Yang','+6266073431314','rhoncus.Proin@loremfringillaornare.com','842-3949 Penatibus Avenue','1986-06-15'),('Allistair Fry','+6222034449786','a.aliquet.vel@Curae.org','227 Nunc Rd.','1986-10-05'),('Castor Love','+6252809369318','malesuada.fames.ac@duinec.ca','P.O. Box 287, 1139 Aliquam Rd.','1983-08-29'),('Abel Thomas','+6252736495294','commodo@Donecsollicitudin.net','999-1468 Amet Road','2004-05-08'),('Bruno James','+6280949560368','interdum@metusfacilisislorem.edu','Ap #255-1654 Feugiat St.','1998-08-04'),('Brendan Beasley','+6270282566443','suscipit.est@ipsumSuspendissenon.com','Ap #420-7215 Fames St.','1965-01-01'),('Baxter Mccarty','+6288882566008','Cum.sociis.natoque@sitametdiam.org','6827 Massa. Rd.','2007-02-21'),('Amos Wells','+6241742756936','mi.felis.adipiscing@magnisdisparturient.net','821-2046 Parturient Ave','1996-11-30'),('Thor Crawford','+6220498134577','Duis@pretiumaliquet.com','P.O. Box 122, 3004 A, Rd.','2000-12-11'),('Darius Nash','+6268090069825','non.enim@orciDonec.com','P.O. Box 730, 4340 Suscipit, Rd.','2007-04-04'),('Alden Hickman','+6288673611023','cursus.et.eros@egetmagnaSuspendisse.edu','Ap #704-9740 Magnis Rd.','1984-11-21'),('Lamar Norton','+6273262486294','ad.litora@facilisiseget.co.uk','118-9473 In Ave','1980-12-16'),('Herman Beck','+6231208031544','posuere.vulputate.lacus@pellentesqueegetdictum.ca','548-4854 Lectus Ave','1964-07-25'),('Dean Lyons','+6227969331386','nibh@dolorvitaedolor.edu','4267 Sed Avenue','2007-05-05'),('Xander Hancock','+6246931709164','lorem.vitae.odio@netusetmalesuada.org','586-1935 Egestas Avenue','1966-03-07'),('Thane Oneil','+6294126794888','erat.in.consectetuer@nisi.ca','P.O. Box 143, 7591 At, St.','2006-01-25'),('Oscar Whitehead','+6248573295705','vel.sapien@ategestasa.co.uk','135-1454 Semper. Av.','1984-09-07'),('Tyler Holcomb','+6258273690563','velit@vestibulum.com','673-1307 In Rd.','1974-08-05'),('David Adkins','+6258092349742','mattis.ornare.lectus@Sedegetlacus.com','Ap #901-2761 Pede Av.','1993-08-11'),('Lawrence Aguilar','+6288629315686','magnis@euaugue.com','924-7202 Sit Avenue','1991-10-19'),('Hiram Pennington','+6298035796512','Integer.mollis@mauriselitdictum.edu','Ap #915-2201 Consequat St.','1965-10-02'),('Clinton Clayton','+6219916497310','eros@Aenean.com','P.O. Box 140, 5042 Eu Av.','1977-05-11'),('Ronan Morrison','+6211890955699','nibh.Donec.est@dictumeleifend.org','P.O. Box 307, 3503 Felis. Rd.','1969-06-13'),('Buckminster Merritt','+6274356862587','nec.ante.Maecenas@Sedpharetrafelis.net','Ap #324-8079 Nisl. Road','1999-02-05'),('Keegan Rosario','+6253254550464','elit@Mauris.edu','P.O. Box 164, 6063 Taciti Street','1988-08-14'),('Akeem Jacobs','+6288823830035','nisl.arcu@acmattis.com','4988 Aliquam Rd.','1970-04-16'),('Maxwell Hubbard','+6252399080913','et.netus@acsem.edu','901-6974 Magna. Rd.','1958-06-18'),('Nehru Oneil','+6274091338044','scelerisque@Integeridmagna.co.uk','3284 Vehicula Street','1969-12-26'),('Nash Hardin','+6262070877508','ullamcorper.viverra.Maecenas@ametconsectetueradipiscing.co.uk','349-4044 Id Rd.','2008-02-23'),('Kevin Hutchinson','+6249748471810','Nullam@euaccumsansed.edu','Ap #196-8355 Donec St.','1998-07-14'),('Lyle Bray','+6233408344923','a.dui.Cras@sedsapienNunc.org','874-3028 Donec Road','1996-12-04'),('Merrill Randolph','+6226428674489','ligula.Aliquam@porttitor.ca','104-9957 Arcu. Av.','1990-01-24'),('Noble Maddox','+6217814202807','Nam.interdum.enim@enimcommodohendrerit.net','363-8657 Enim St.','1983-03-18'),('Keefe Schwartz','+6270650973996','Mauris.magna.Duis@Quisque.co.uk','P.O. Box 972, 8115 Sapien, Road','1970-12-16'),('Laith Wiggins','+6243772975401','purus.gravida.sagittis@atarcu.org','P.O. Box 902, 9400 Tortor. Ave','1983-08-12'),('Lamar Whitehead','+6229203746476','ornare@Proinnislsem.net','Ap #565-4903 Felis Ave','1986-05-21'),('Alec Leonard','+6242307304581','cubilia.Curae@malesuadavelconvallis.edu','596-5232 In Rd.','1961-07-31'),('Carson Melendez','+6257101562073','arcu.Nunc.mauris@vitae.com','785-9656 Vulputate Avenue','1958-10-16'),('Warren Levine','+6278340176684','sollicitudin.orci.sem@congueInscelerisque.ca','9281 Massa Rd.','1962-05-04'),('Brett Frank','+6236883144548','ac.sem.ut@sitametante.net','Ap #682-7205 Malesuada Avenue','1990-09-03'),('Leo Lester','+6217379688195','interdum.Sed@dictumeleifend.co.uk','595 Vulputate, Avenue','2003-01-03'),('Shad Patel','+6292312837947','et.rutrum@egestasa.com','Ap #950-9847 Mauris Street','1984-09-27'),('Laith Langley','+6287864535111','egestas.lacinia.Sed@esttempor.co.uk','558-3848 Leo, Ave','1959-12-09'),('Yardley Stafford','+6227215355780','vulputate.mauris.sagittis@sociisnatoque.com','P.O. Box 480, 783 Sed St.','1996-10-03'),('Dane Ray','+6253027436704','luctus.ut.pellentesque@dolorQuisquetincidunt.net','266-6073 Auctor St.','2001-11-25'),('Gareth Dennis','+6252591186193','malesuada.id@eueratsemper.edu','P.O. Box 194, 7803 Cras Road','1995-07-30'),('Herrod Davenport','+6280763501669','ultricies.dignissim.lacus@velesttempor.com','625-4581 Vehicula St.','1990-04-18'),('Aristotle Sanford','+6244550741201','consectetuer.euismod.est@loremsit.edu','655-3619 Donec Av.','1965-02-17'),('Jack Collier','+6246339945538','ac.tellus.Suspendisse@eumetus.ca','7384 Sed Road','1963-12-13'),('Colorado Mcfadden','+6295904528424','est@justonec.co.uk','870-5412 Id Ave','1990-05-10'),('Kasper Alston','+6263943755377','In@semut.com','392-7952 Diam Avenue','1982-04-05'),('Rajah Galloway','+6256709959752','ac.nulla@placeratvelitQuisque.edu','P.O. Box 138, 1114 Risus. Street','1980-08-03'),('Armand Walker','+6223002738601','Cras.vehicula.aliquet@augueac.org','212-4885 Amet Rd.','1972-11-14'),('Aidan Montoya','+6278244006926','sit.amet@iaculis.co.uk','6389 Semper Rd.','1997-12-30'),('Ronan Morrison','+6278148762369','iaculis@semperNamtempor.co.uk','P.O. Box 116, 692 At Street','1964-12-14'),('Julian Whitfield','+6251740830164','laoreet.libero.et@turpisnecmauris.co.uk','770-6236 Erat Av.','1962-03-08'),('Sawyer Mccormick','+6268069641646','dictum.sapien.Aenean@egetlaoreetposuere.org','946-5612 Non, Ave','2002-10-28'),('Reece Cortez','+6283053167103','arcu.Morbi@imperdietullamcorperDuis.ca','Ap #116-7609 Mauris Rd.','1980-08-11'),('Travis Cain','+6282314667325','consectetuer.adipiscing.elit@posuerevulputatelacus.ca','4866 Ut, Av.','1977-08-17'),('Steel Estrada','+6236937541451','nunc.id@sit.com','Ap #910-2399 Consequat Avenue','1962-10-03'),('Jelani Howard','+6298697099284','purus.accumsan.interdum@nequeet.com','3687 In Rd.','1989-03-14'),('Clark Russell','+6297957685295','tristique.aliquet.Phasellus@Sednullaante.com','701-6349 Nunc. Road','1975-06-10'),('Len Berg','+6210893987197','ut@ornaresagittis.org','389-6224 Donec St.','1979-06-09'),('Baxter Morse','+6261683986986','luctus.ipsum@dolor.co.uk','P.O. Box 888, 9347 Magna St.','1983-06-06'),('Jordan Fields','+6266143201052','risus@enim.edu','2780 Sit Street','1966-01-09'),('Derek Hudson','+6210682375284','rhoncus.Donec@leo.org','965-8626 Praesent Rd.','1974-04-15'),('Lyle Charles','+6216515615767','non@Quisque.co.uk','9587 Natoque Street','1973-07-01'),('Aristotle Crane','+6241884890164','Nulla.dignissim@Suspendisse.org','473-5284 Sed St.','1973-12-20'),('Mufutau Alexander','+6242925964570','interdum.libero@Nulla.edu','P.O. Box 471, 3218 Orci Road','1978-03-30'),('Norman Burton','+6298271753636','dictum.placerat@libero.com','Ap #428-7559 Per Road','1979-09-01'),('Brent Mooney','+6220066965914','dui.Suspendisse@ornareInfaucibus.ca','5134 Dapibus St.','1994-07-31'),('Kenyon Bright','+6222060529070','consectetuer.euismod.est@nequesed.edu','Ap #752-7883 Lectus Avenue','1965-12-07'),('Garth Rush','+6252721832241','molestie.tellus.Aenean@atfringilla.co.uk','P.O. Box 173, 1937 Orci Rd.','1988-05-03'),('Emerson Davis','+6282449291763','risus.quis.diam@turpisAliquamadipiscing.com','508-1114 Dolor. Avenue','1968-06-19'),('Roth Foreman','+6281793417084','placerat@pedeNuncsed.com','955-3333 Arcu. Avenue','1968-03-07'),('Vernon Short','+6263073284331','turpis.nec@Donecnibh.ca','P.O. Box 879, 8386 Mauris Rd.','1967-05-13'),('Myles Castillo','+6252906482753','dolor@fermentumconvallis.ca','994-2938 Neque. Street','1987-03-12'),('Keegan Buckner','+6245210302520','primis.in@Maurisut.com','6645 Donec Ave','1978-12-24'),('Asher Shannon','+6267948785931','pellentesque.massa@nislsemconsequat.co.uk','P.O. Box 486, 8929 Sit Street','1983-03-19'),('Ulric Haley','+6228389622984','rutrum@non.org','Ap #736-6243 Tellus Street','1999-03-19'),('Branden Hess','+6250644102834','lorem.vehicula@interdumligula.net','7383 Condimentum Street','1967-06-09'),('Macaulay Foreman','+6283989506224','blandit.congue.In@antedictumcursus.edu','Ap #660-178 Felis. St.','1973-09-25'),('Noah Malone','+6289261577005','varius.et@eliteratvitae.net','925-5068 Congue, St.','1985-02-20'),('Kenyon Kim','+6243220081067','lacus.vestibulum@euismodestarcu.edu','6985 Proin St.','1994-11-10'),('Wyatt Dickerson','+6297998514995','tempor@a.com','P.O. Box 919, 2605 Phasellus Av.','2005-05-16'),('Tucker Stafford','+6247837637265','Maecenas.iaculis@penatibusetmagnis.edu','684-2524 Libero Road','1994-06-21'),('Zephania Walton','+6235679857505','cursus.luctus.ipsum@Mauriseu.com','P.O. Box 404, 2725 Non Rd.','1978-10-31'),('Oren Blackwell','+6224807602731','Vivamus@feugiat.org','Ap #269-8624 Sed Ave','1975-01-06'),('Ishmael Harris','+6236845425981','lectus@hendreritnequeIn.ca','P.O. Box 369, 5693 Leo Rd.','1979-11-29'),('Zephania Pace','+6211276088275','turpis@velitQuisque.co.uk','788-2671 Neque Rd.','1983-07-07'),('Bruce Brennan','+6238627534491','lorem.eget@ametdiam.org','2377 Sed Avenue','1971-12-06'),
    ('Burke Ortega','+6236244652965','Cras@metuseuerat.ca','P.O. Box 755, 4135 Eros Street','1996-09-18'),('Raphael Wise','+6211357294438','ornare@scelerisqueneque.edu','Ap #128-376 Nisl St.','1992-12-19'),('Chancellor Washington','+6278716947448','non@feugiatLorem.com','205-7062 Semper St.','1992-08-16'),('Len Dillon','+6269534963657','mattis.semper@egetipsumDonec.co.uk','946-8143 Montes, Avenue','1983-09-29'),('Chandler Dominguez','+6221298792060','id@Nunc.co.uk','6818 Tincidunt Rd.','1966-01-27'),('Hamilton Daniel','+6297421910666','diam.at.pretium@nulla.ca','P.O. Box 704, 7434 Vulputate Rd.','2005-06-30'),('Arden Eaton','+6237992807955','pharetra.felis@ipsumprimisin.ca','Ap #535-4342 Ligula. Street','2006-12-30');