-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateEnum
CREATE TYPE "TipoPessoa" AS ENUM ('F', 'J');

-- CreateTable
CREATE TABLE "pessoa" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "tipo" "TipoPessoa" NOT NULL DEFAULT 'F',
    "id_endereco" UUID,
    "id_telefone" UUID,

    CONSTRAINT "pessoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "curso" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nome" TEXT,
    "codigo_emec" INTEGER,

    CONSTRAINT "curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aluno" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_pessoa" UUID,
    "id_curso" UUID,

    CONSTRAINT "aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registro_diploma" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_aluno" UUID NOT NULL,
    "id_curso" UUID NOT NULL,
    "id_ies_exp" UUID NOT NULL,
    "id_ies_reg" UUID NOT NULL,
    "data_ingresso" DATE NOT NULL,
    "data_conclusao" DATE NOT NULL,
    "data_expedicao" DATE NOT NULL,
    "data_registro" DATE NOT NULL,
    "numero_expedicao" INTEGER NOT NULL,
    "numero_registro" INTEGER NOT NULL,
    "numero_processo" TEXT,

    CONSTRAINT "registro_diploma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pessoa_fisica" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "nome" TEXT,
    "rg" VARCHAR(30),
    "cpf" VARCHAR(14),
    "data_nascimento" DATE,
    "id_pessoa" UUID,

    CONSTRAINT "pessoa_fisica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pessoa_juridica" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "nome_fantasia" VARCHAR(100) NOT NULL,
    "razao_social" VARCHAR(100),
    "inscricao_estadual" VARCHAR(30),
    "inscricao_federal" VARCHAR(30),
    "cnpj" VARCHAR(14),
    "data_constituicao" TIMESTAMP(3),
    "id_pessoa" UUID,

    CONSTRAINT "PK_bee78e8f1760ccf9cff402118a6" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "instituicao" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "nome" TEXT NOT NULL,
    "codigo_emec" TEXT,
    "id_pessoa" UUID,

    CONSTRAINT "instituicao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "discente" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "matricula" TEXT,
    "id_pessoa" UUID,

    CONSTRAINT "discente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "telefone" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ddd" TEXT,
    "numero" VARCHAR(10),

    CONSTRAINT "telefone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "endereco" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cep" VARCHAR(8),
    "logradouro" VARCHAR(60),
    "municipio" VARCHAR(30),
    "bairro" VARCHAR(50),
    "id_estado" UUID,

    CONSTRAINT "PK_2a6880f71a7f8d1c677bb2a32a8" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissions" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,

    CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissions_roles" (
    "role_id" UUID NOT NULL,
    "permission_id" UUID NOT NULL,

    CONSTRAINT "PK_838ed6e68b01d6912fa682bedef" PRIMARY KEY ("role_id","permission_id")
);

-- CreateTable
CREATE TABLE "refresh_token" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_in" INTEGER NOT NULL,
    "token" VARCHAR NOT NULL,
    "id_user" UUID,

    CONSTRAINT "PK_b575dd3c21fb0831013c909e7fe" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,

    CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "provider" VARCHAR,
    "id_provider" VARCHAR,
    "image" VARCHAR,
    "email_verified" TIMESTAMP(3),

    CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_permissions" (
    "user_id" UUID NOT NULL,
    "permission_id" UUID NOT NULL,

    CONSTRAINT "PK_7f3736984cd8546a1e418005561" PRIMARY KEY ("user_id","permission_id")
);

-- CreateTable
CREATE TABLE "users_roles" (
    "user_id" UUID NOT NULL,
    "role_id" UUID NOT NULL,

    CONSTRAINT "PK_c525e9373d63035b9919e578a9c" PRIMARY KEY ("user_id","role_id")
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "userId" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "sessionToken" TEXT NOT NULL,
    "userId" UUID NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estado" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "uf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ddd" SMALLINT,

    CONSTRAINT "estado_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "aluno_id_pessoa_key" ON "aluno"("id_pessoa");

-- CreateIndex
CREATE UNIQUE INDEX "aluno_id_curso_key" ON "aluno"("id_curso");

-- CreateIndex
CREATE UNIQUE INDEX "registro_diploma_id_aluno_key" ON "registro_diploma"("id_aluno");

-- CreateIndex
CREATE UNIQUE INDEX "registro_diploma_id_curso_key" ON "registro_diploma"("id_curso");

-- CreateIndex
CREATE UNIQUE INDEX "registro_diploma_id_ies_exp_key" ON "registro_diploma"("id_ies_exp");

-- CreateIndex
CREATE UNIQUE INDEX "registro_diploma_id_ies_reg_key" ON "registro_diploma"("id_ies_reg");

-- CreateIndex
CREATE UNIQUE INDEX "pessoa_fisica_id_pessoa_key" ON "pessoa_fisica"("id_pessoa");

-- CreateIndex
CREATE UNIQUE INDEX "pessoa_juridica_id_pessoa_key" ON "pessoa_juridica"("id_pessoa");

-- CreateIndex
CREATE UNIQUE INDEX "instituicao_id_pessoa_key" ON "instituicao"("id_pessoa");

-- CreateIndex
CREATE UNIQUE INDEX "discente_id_pessoa_key" ON "discente"("id_pessoa");

-- CreateIndex
CREATE INDEX "IDX_3309f5fa8d95935f0701027f2b" ON "permissions_roles"("permission_id");

-- CreateIndex
CREATE INDEX "IDX_e08f6859eaac8cbf7f087f64e2" ON "permissions_roles"("role_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "IDX_4de7d0b175f702be3be5527002" ON "users_permissions"("user_id");

-- CreateIndex
CREATE INDEX "IDX_b09b9a210c60f41ec7b453758e" ON "users_permissions"("permission_id");

-- CreateIndex
CREATE INDEX "IDX_1cf664021f00b9cc1ff95e17de" ON "users_roles"("role_id");

-- CreateIndex
CREATE INDEX "IDX_e4435209df12bc1f001e536017" ON "users_roles"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_token_key" ON "verification_tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_token_key" ON "verification_tokens"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON "accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_sessionToken_key" ON "sessions"("sessionToken");

-- AddForeignKey
ALTER TABLE "pessoa" ADD CONSTRAINT "pessoa_id_endereco_fkey" FOREIGN KEY ("id_endereco") REFERENCES "endereco"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pessoa" ADD CONSTRAINT "pessoa_id_telefone_fkey" FOREIGN KEY ("id_telefone") REFERENCES "telefone"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_id_pessoa_fkey" FOREIGN KEY ("id_pessoa") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aluno" ADD CONSTRAINT "aluno_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "curso"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "registro_diploma" ADD CONSTRAINT "registro_diploma_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro_diploma" ADD CONSTRAINT "registro_diploma_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro_diploma" ADD CONSTRAINT "registro_diploma_id_ies_exp_fkey" FOREIGN KEY ("id_ies_exp") REFERENCES "instituicao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro_diploma" ADD CONSTRAINT "registro_diploma_id_ies_reg_fkey" FOREIGN KEY ("id_ies_reg") REFERENCES "instituicao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pessoa_fisica" ADD CONSTRAINT "pessoa_fisica_id_pessoa_fkey" FOREIGN KEY ("id_pessoa") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pessoa_juridica" ADD CONSTRAINT "pessoa_juridica_id_pessoa_fkey" FOREIGN KEY ("id_pessoa") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "instituicao" ADD CONSTRAINT "instituicao_id_pessoa_fkey" FOREIGN KEY ("id_pessoa") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "discente" ADD CONSTRAINT "discente_id_pessoa_fkey" FOREIGN KEY ("id_pessoa") REFERENCES "pessoa_fisica"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_id_estado_fkey" FOREIGN KEY ("id_estado") REFERENCES "estado"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "permissions_roles" ADD CONSTRAINT "FK_3309f5fa8d95935f0701027f2bd" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permissions_roles" ADD CONSTRAINT "FK_e08f6859eaac8cbf7f087f64e2b" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refresh_token" ADD CONSTRAINT "FK_fd79923e4359a26a971f841fb5e" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users_permissions" ADD CONSTRAINT "FK_b09b9a210c60f41ec7b453758e9" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_permissions" ADD CONSTRAINT "FK_4de7d0b175f702be3be55270023" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_roles" ADD CONSTRAINT "FK_1cf664021f00b9cc1ff95e17de4" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_roles" ADD CONSTRAINT "FK_e4435209df12bc1f001e5360174" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
