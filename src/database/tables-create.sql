CREATE TABLE public.parameters
(
    baldness boolean NOT NULL,
    freackless boolean NOT NULL,
    eye_color integer NOT NULL,
    skin_color integer NOT NULL,
    sex boolean NOT NULL,
    name character(200) NOT NULL,
    id smallserial NOT NULL,
    PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.parameters
    OWNER to postgres;

COMMENT ON TABLE public.parameters
    IS 'this table will contain the parameters for a punnett square prediction';