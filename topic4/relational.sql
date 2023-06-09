CREATE TABLE IF NOT EXISTS world(wid integer primary key, name varchar(255));

CREATE TABLE IF NOT EXISTS level(lid integer, world integer, name varchar(255), foreign key (world) references world);

ALTER TABLE level ADD PRIMARY KEY (world,lid);

CREATE TABLE IF NOT EXISTS boss(cid serial, world integer, lid integer, name varchar(255), foreign key (world,lid) references level ON DELETE CASCADE);

\d world
                       Table "public.world"
 Column |          Type          | Collation | Nullable | Default 
--------+------------------------+-----------+----------+---------
 wid    | integer                |           | not null | 
 name   | character varying(255) |           |          | 
Indexes:
    "world_pkey" PRIMARY KEY, btree (wid)
Referenced by:
    TABLE "level" CONSTRAINT "level_world_fkey" FOREIGN KEY (world) REFERENCES world(wid)

\d level
                       Table "public.level"
 Column |          Type          | Collation | Nullable | Default 
--------+------------------------+-----------+----------+---------
 lid    | integer                |           | not null | 
 world  | integer                |           | not null | 
 name   | character varying(255) |           |          | 
Indexes:
    "level_pkey" PRIMARY KEY, btree (world, lid)
Foreign-key constraints:
    "level_world_fkey" FOREIGN KEY (world) REFERENCES world(wid)
Referenced by:
    TABLE "boss" CONSTRAINT "boss_world_lid_fkey" FOREIGN KEY (world, lid) REFERENCES level(world, lid) ON DELETE CASCADE

\d boss
                                    Table "public.boss"
 Column |          Type          | Collation | Nullable |              Default              
--------+------------------------+-----------+----------+-----------------------------------
 cid    | integer                |           | not null | nextval('boss_cid_seq'::regclass)
 world  | integer                |           |          | 
 lid    | integer                |           |          | 
 name   | character varying(255) |           |          | 
Foreign-key constraints:
    "boss_world_lid_fkey" FOREIGN KEY (world, lid) REFERENCES level(world, lid) ON DELETE CASCADE

INSERT INTO world VALUES (1, 'Grass World');

INSERT INTO world VALUES (2, 'Desert World');

INSERT INTO level (world,lid,name) VALUES (1,1,'Super Bell Hill');

INSERT INTO level (world,lid,name) VALUES (5,1,'Super Bell Hill');
-- ERROR:  insert or update on table "level" violates foreign key constraint "level_world_fkey"
-- DETAIL:  Key (world)=(5) is not present in table "world".
INSERT INTO level (world,lid,name) VALUES (1,2,'Gloomba blockade');

INSERT INTO level (world,lid,name) VALUES (2,1,'Rumbling Hills');

INSERT INTO level (world,lid,name) VALUES (2,2,'Double Cherry Pass');

INSERT INTO boss (world,lid,name) VALUES (1,1,'Bowser jr');

INSERT INTO boss (world,lid,name) VALUES (3,1,'Bowser jr');
-- ERROR:  insert or update on table "boss" violates foreign key constraint "boss_world_lid_fkey"
-- DETAIL:  Key (world, lid)=(3, 1) is not present in table "level".
INSERT INTO boss (world,lid,name) VALUES (1,2,'Bam Bam');

INSERT INTO boss (world,lid,name) VALUES (2,2,'Roy Koopa');

SELECT * from boss;
 cid | world | lid |   name    
-----+-------+-----+-----------
   1 |     1 |   1 | Bowser jr
   3 |     1 |   2 | Bam Bam
   4 |     2 |   2 | Roy Koopa
(3 rows)

SELECT * FROM levels;
-- ERROR:  relation "levels" does not exist
LINE 1: SELECT * FROM levels;
                      ^
SELECT * FROM level;
 lid | world |        name        
-----+-------+--------------------
   1 |     1 | Super Bell Hill
   2 |     1 | Gloomba blockade
   1 |     2 | Rumbling Hills
   2 |     2 | Double Cherry Pass
(4 rows)

SELECT * FROM boss ORDER BY name;
 cid | world | lid |   name    
-----+-------+-----+-----------
   3 |     1 |   2 | Bam Bam
   1 |     1 |   1 | Bowser jr
   4 |     2 |   2 | Roy Koopa
(3 rows)

SELECT * FROM boss C inner join world W on C.world = W.wid;
 cid | world | lid |   name    | wid |     name     
-----+-------+-----+-----------+-----+--------------
   1 |     1 |   1 | Bowser jr |   1 | Grass World
   3 |     1 |   2 | Bam Bam   |   1 | Grass World
   4 |     2 |   2 | Roy Koopa |   2 | Desert World
(3 rows)

