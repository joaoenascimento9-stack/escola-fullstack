import db from "../../db/banco";
import { NextResponse } from "next/server";

export async function GET() {
    const alunos = await db.prepare('SELECT * FROM alunos ORDER BY nome').all();
    return NextResponse.json(alunos);
}

export async function SalvaAlunos(request) {

    try {
        const dados = await request.json()
        const sql = db.prepare(`
            INSERT INTO alunos (nome, idade, serie, ra)
            VALUES (?, ?, ?, ?)`);
        sql.run(dados.nome, dados.idade, dados.serie, dados.ra);
        return NextResponse.json({ msg: 'Aluno cadastrado com sucesso!' })

    } catch (error) {
        console.error('Erro ao realizar o cadastro', error)
    }
}

export async function editarAluno(request) {
    try {
        const dados = await request.json()
        const sql = db.prepare(`
            UPDATE alunos SET nome = ?, idade = ?, serie = ?, ra = ?
            WHERE id = ?`);
        sql.run(dados.nome, dados.idade, dados.serie, dados.ra, dados.id);
        return NextResponse.json({ msg: 'Aluno atualizado com sucesso!' })

    } catch (error) {
        console.error('Erro ao realizar a atualização', error)
    }
}

export async function deletarAluno(request) {
    try {
        const dados = await request.json()
        const sql = db.prepare(`
            DELETE FROM alunos WHERE id = ?`);
        sql.run(dados.id);
        return NextResponse.json({ msg: 'Aluno deletado com sucesso!' })

    } catch (error) {
        console.error('Erro ao realizar a exclusão', error)
    }
}
