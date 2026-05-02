
    function logar() {
        aguardar();

       let email = email_input.value;
       let senha = senha_input.value;

        if (email === '') {/*se o campo e-mail estiver vazio será marcado como inválido*/
            valido = false
           document.getElementById('email-required-error').style.display = "block";/*chama mensagem definida no html (e-mail não pode estar vazio) e a deixa visivel*/
        } else{
             document.getElementById('email-required-error').style.display = "none";
            }
         if (senha === '') {/*se o campo senha estiver vazio será marcado como inválido*/
            valido = false
            document.getElementById('senha-required-error').style.display = "block";/*chama mensagem definida no html (campo senha não pode estar vazio) e a deixa visivel*/
        } 
        
        else {
            document.getElementById('senha-required-error').style.display = "none";}
            finalizarAguardar();
       

        console.log("FORM LOGIN: ", email);
        console.log("FORM SENHA: ", senha);

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: email,
                senhaServer: senha
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.id;
                
                    setTimeout(function () {
                        window.location = "./dashboard/cards.html";
                    }, 1000); // apenas para exibir o loading

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                    finalizarAguardar(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    }

    function sumirMensagem() {
        cardErro.style.display = "none"
    }
