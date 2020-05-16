-- Table: public.collaborateur

-- DROP TABLE public.collaborateur;

CREATE TABLE public.collaborateur
(
    id_collab integer NOT NULL,
    nom character varying(20) COLLATE pg_catalog."default",
    prenom character varying(20) COLLATE pg_catalog."default",
    mail character varying(40) COLLATE pg_catalog."default",
    CONSTRAINT pk_collaborateur PRIMARY KEY (id_collab)
)

TABLESPACE pg_default;

ALTER TABLE public.collaborateur
    OWNER to postgres;

-- Table: public.evenement

-- DROP TABLE public.evenement;

CREATE TABLE public.evenement
(
    id_event integer NOT NULL,
    date_debut date NOT NULL,
    date_fin date NOT NULL,
    id_projet integer,
    commentaire character varying(300) COLLATE pg_catalog."default",
    CONSTRAINT pk_evenement PRIMARY KEY (id_event),
    CONSTRAINT fk_evenement_id_projet FOREIGN KEY (id_projet)
        REFERENCES public.projet (id_projet) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.evenement
    OWNER to postgres;

-- Table: public.mood

-- DROP TABLE public.mood;

CREATE TABLE public.mood
(
    date date NOT NULL,
    id_collab integer NOT NULL,
    humeur integer NOT NULL,
    personnel integer DEFAULT 0,
    CONSTRAINT pk_mood PRIMARY KEY (date, id_collab),
    CONSTRAINT fk_mood FOREIGN KEY (id_collab)
        REFERENCES public.collaborateur (id_collab) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.mood
    OWNER to postgres;

-- Table: public.projet

-- DROP TABLE public.projet;

CREATE TABLE public.projet
(
    id_projet integer NOT NULL,
    libelle character varying(30) COLLATE pg_catalog."default",
    id_service integer,
    CONSTRAINT pk_projet PRIMARY KEY (id_projet),
    CONSTRAINT fk_projet_service FOREIGN KEY (id_service)
        REFERENCES public.service (id_service) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.projet
    OWNER to postgres;

-- Table: public.projet_collab

-- DROP TABLE public.projet_collab;

CREATE TABLE public.projet_collab
(
    id_collab integer NOT NULL,
    id_projet integer NOT NULL,
    date_entree date,
    CONSTRAINT pk_projet_collab PRIMARY KEY (id_collab, id_projet),
    CONSTRAINT fk_collab_projet FOREIGN KEY (id_collab)
        REFERENCES public.collaborateur (id_collab) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_projet_collab FOREIGN KEY (id_projet)
        REFERENCES public.projet (id_projet) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.projet_collab
    OWNER to postgres;

-- Table: public.projet_resp

-- DROP TABLE public.projet_resp;

CREATE TABLE public.projet_resp
(
    id_projet integer NOT NULL,
    id_responsable integer NOT NULL,
    CONSTRAINT pk_projet_resp PRIMARY KEY (id_projet, id_responsable),
    CONSTRAINT fk_projet_resp FOREIGN KEY (id_projet)
        REFERENCES public.projet (id_projet) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_resp_projet FOREIGN KEY (id_responsable)
        REFERENCES public.collaborateur (id_collab) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.projet_resp
    OWNER to postgres;

-- Table: public.resp_collab

-- DROP TABLE public.resp_collab;

CREATE TABLE public.resp_collab
(
    id_responsable integer NOT NULL,
    id_collab integer NOT NULL,
    CONSTRAINT pk_resp_collab PRIMARY KEY (id_responsable, id_collab),
    CONSTRAINT fk_collab_resp FOREIGN KEY (id_collab)
        REFERENCES public.collaborateur (id_collab) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_resp_collab FOREIGN KEY (id_responsable)
        REFERENCES public.collaborateur (id_collab) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.resp_collab
    OWNER to postgres;

-- Table: public.service

-- DROP TABLE public.service;

CREATE TABLE public.service
(
    id_service integer NOT NULL,
    nom character varying(30) COLLATE pg_catalog."default",
    CONSTRAINT pk_service PRIMARY KEY (id_service)
)

TABLESPACE pg_default;

ALTER TABLE public.service
    OWNER to postgres;