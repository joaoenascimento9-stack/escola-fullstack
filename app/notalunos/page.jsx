"use client";
import { useState } from "react";
import Header from "../components/header";

export default function NotAlunos() {
    const [aluno, setAluno] = useState('');
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');

    return (
        <>
            <Header />
            <h2>Cadastro de Notas</h2>

            <label htmlFor="aluno">Aluno:</label>
            <input type="text" value={aluno} onChange={e => setAluno(e.target.value)} />

            <label htmlFor="t1">T1 (trabalho1):</label>
            <input type="number" value={t1} onChange={e => setT1(e.target.value)} />

            <label htmlFor="t2">T2 (trabalho2):</label>
            <input type="number" value={t2} onChange={e => setT2(e.target.value)} />

            <label htmlFor="n1">N1 (nota1):</label>
            <input type="number" value={n1} onChange={e => setN1(e.target.value)} />

            <label htmlFor="n2">N2 (nota2):</label>
            <input type="number" value={n2} onChange={e => setN2(e.target.value)} />

            <label htmlFor="n3">N3 (nota3):</label>
            <input type="number" value={n3} onChange={e => setN3(e.target.value)} />

            <button type="button">Cadastrar</button>
        </>
    );
}
