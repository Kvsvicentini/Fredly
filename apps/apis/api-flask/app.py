from flask import Flask, render_template, request, redirect
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_db():
    conn = sqlite3.connect("eventos.db")
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    conn.execute("""
        CREATE TABLE IF NOT EXISTS eventos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            data TEXT NOT NULL,
            local TEXT NOT NULL,
            descricao TEXT
        );
    """)
    conn.commit()
    conn.close()

init_db()

@app.route("/")
def index():
    conn = get_db()
    eventos = conn.execute("SELECT * FROM eventos").fetchall()
    conn.close()
    return render_template("index.html", eventos=eventos)

@app.route("/criar", methods=["GET", "POST"])
def criar():
    if request.method == "POST":
        nome = request.form["nome"]
        data = request.form["data"]
        local = request.form["local"]
        descricao = request.form["descricao"]

        conn = get_db()
        conn.execute(
            "INSERT INTO eventos (nome, data, local, descricao) VALUES (?, ?, ?, ?)",
            (nome, data, local, descricao)
        )
        conn.commit()
        conn.close()
        return redirect("/")

    return render_template("criar.html")

@app.route("/editar/<int:id>", methods=["GET", "POST"])
def editar(id):
    conn = get_db()

    if request.method == "POST":
        nome = request.form["nome"]
        data = request.form["data"]
        local = request.form["local"]
        descricao = request.form["descricao"]

        conn.execute("""
            UPDATE eventos 
            SET nome=?, data=?, local=?, descricao=? 
            WHERE id=?
        """, (nome, data, local, descricao, id))

        conn.commit()
        conn.close()
        return redirect("/")

    evento = conn.execute("SELECT * FROM eventos WHERE id=?", (id,)).fetchone()
    conn.close()
    return render_template("editar.html", evento=evento)

@app.route("/excluir/<int:id>")
def excluir(id):
    conn = get_db()
    conn.execute("DELETE FROM eventos WHERE id=?", (id,))
    conn.commit()
    conn.close()
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)
