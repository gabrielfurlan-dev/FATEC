using System.Windows.Forms;
using FireSharp.Config;
using FireSharp.Response;
using FireSharp.Interfaces;
using FireSharp;
using System;

namespace FirestoreDatabase
{
    public partial class Firebase : Form
    {
        public Firebase()
        {
            InitializeComponent();
        }

        IFirebaseConfig ifc = new FirebaseConfig
        {
            AuthSecret = "qFnT2oDemeuJCy2DivnkRpf3HUNmGZWYDTtvmqT5",
            BasePath= "https://firebasewithcsharp-default-rtdb.firebaseio.com/"
        };

        IFirebaseClient _client;

        private void LimparCampos()
        {
            txtID.Text = String.Empty;
            txtNome.Text = String.Empty;
            txtMensagem.Text = String.Empty;
        }

        private void btnConectar_Click(object sender, System.EventArgs e)
        {
            try
            {
                _client = new FirebaseClient(ifc);

                Capsula capsula = new Capsula { Id = txtID.Text, Nome = txtNome.Text, Mensagem = txtMensagem.Text };

                _client.Set("Capsulas/" + capsula.Id, capsula);

                MessageBox.Show("Mensagem Cadastrada com Sucesso!");
            }
            catch(Exception ex)
            {
                MessageBox.Show($"Ops! Parece que houve algum problema de conexão.{Environment.NewLine}" +
                    $"Erro: { ex.Message }");
            }
            finally
            {
                LimparCampos();
            }
        }

        private void ibtnExcluir_Click(object sender, EventArgs e)
        {
            try
            {
                _client = new FirebaseClient(ifc);
                _client.Delete("Capsulas/" + txtID.Text);
                MessageBox.Show("Capsula Removida com Sucesso.");
            }
            catch
            {
                MessageBox.Show("Ops! Parece que houve algum problema de conexão.");
            }
            finally
            {
                LimparCampos();
            }
        }

        private void Firebase_Load(object sender, EventArgs e)
        {
            try
            {
                _client = new FirebaseClient(ifc);
            }
            catch
            {
                MessageBox.Show("Ops! Não foi possivel se conectar ao banco de dados.");
            }
            finally
            {
                LimparCampos();
            }
        }
    }

    partial class Capsula{
        public string Nome { get; set; }
        public string Mensagem { get; set; }
        public string Id { get; internal set; }
    }
}
