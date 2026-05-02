 function cadastrar() {
        let nome = input_nome.value
        let email = input_email.value

        let senha = input_senha.value

        let nascimento = input_data.value

        let confirmacao = input_confirmacao.value
        let caracteres = ['!', '@', '$', '%', '&', '*', '?', '/']
        let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

        let mensagem = ''
        let valido = true
       

        // nome validacao
       
        if (nome === '') {/*se o campo nome estiver vazio será marcado como inválido*/
            valido = false
            document.getElementById('nome-required-error').style.display = "block";/*chama mensagem definida no html (nome fantasia não pode estar vazio) e a deixa visivel*/
        }else{
             document.getElementById('nome-required-error').style.display = "none";/*chama mensagem definida no html (nome fantasia não pode estar vazio) e a deixa invisivel*/
        }
        

        // validacao email
      
        if (email === '') {/*se o campo e-mail estiver vazio será marcado como inválido*/
            valido = false
           document.getElementById('email-required-error').style.display = "block";/*chama mensagem definida no html (e-mail não pode estar vazio) e a deixa visivel*/
        } else{
             document.getElementById('email-required-error').style.display = "none";/*chama mensagem definida no html (e-mail não pode estar vazio) e a deixa invisivel*/
            if (!email.includes('@')) {/*verifica se o campo e-mail contém @*/
                valido = false
                 document.getElementById('email-invalid-error').style.display = "block";/*chama mensagem definida no html (e-mail inválido) e a deixa visivel*/
            }else{
               document.getElementById('email-invalid-error').style.display = "none"; /*chama mensagem definida no html (e-mail inválido) e a deixa invisivel*/
            }
        }

        // validação nascimento
         if (nascimento === '') {/*se o campo data de nascimento estiver vazio será marcado como inválido*/
            valido = false
           document.getElementById('nascimento-required-error').style.display = "block";/*chama mensagem definida no html (data de nascimento não pode estar vazio) e a deixa visivel*/
        } else{
             document.getElementById('nascimento-required-error').style.display = "none";/*chama mensagem definida no html (data de nascimento não pode estar vazio) e a deixa invisivel*/
        }
        // validações senha
       
        if (senha === '') {/*se o campo senha estiver vazio será marcado como inválido*/
            valido = false
            document.getElementById('senha-required-error').style.display = "block";/*chama mensagem definida no html (campo senha não pode estar vazio) e a deixa visivel*/
        } 
        
        else {
            document.getElementById('senha-required-error').style.display = "none";/*chama mensagem definida no html (campo senha não pode estar vazio) e a deixa invisivel*/
            let contemnumero = false
            let contemcaractere = false
            if (senha.length < 8) {/*verifica se a senha tem pelo menos 8 caracteres*/
                valido = false
                document.getElementById('senha-comprimento-error').style.display = "block";/*chama mensagem definida no html (senha inválida) e a deixa visivel*/
            } else{
                document.getElementById('senha-comprimento-error').style.display = "none";/*chama mensagem definida no html (senha inválida) e a deixa invisivel*/
            }
            for (let cont = 0; cont < numeros.length; cont++) {
                if (senha.includes(numeros[cont])) {/*utiliza estrutura de repetição para percorer lista predifinida e identificar se um dos números da lista está contido na senha*/
                 contemnumero = true
                     break
                } }
                if(!contemnumero){/*verifica se a senha contém números*/
                    valido = false
                    document.getElementById('senha-numero-error').style.display = "block";/*chama mensagem definida no html (senha inválida) e a deixa visivel*/
                }else{
                    document.getElementById('senha-numero-error').style.display = "none";/*chama mensagem definida no html (senha inválida) e a deixa invisivel*/
                }
           
            for (let cont = 0; cont < caracteres.length; cont++) {/*utiliza estrutura de repetição para percorer lista predifinida e identificar se um dos caracteres da lista está contido na senha*/
                if (senha.includes(caracteres[cont])) {
                    contemcaractere = true
                     break}
                } 
                
                if(!contemcaractere){/*verifica se a senha contém caracteres especiais*/
                    valido = false
                   document.getElementById('senha-caractere-error').style.display = "block";/*chama mensagem definida no html (senha inválida) e a deixa visivel*/
                }else{
                     document.getElementById('senha-caractere-error').style.display = "none";/*chama mensagem definida no html (senha inválida) e a deixa invisivel*/
                }
            
            if (senha == senha.toLowerCase()) {/* verifica se a senha contém letras maiusculas*/
                valido = false
                 document.getElementById('senha-maiuscula-error').style.display = "block";/*chama mensagem definida no html (senha inválida) e a deixa visivel*/
            }else{
               document.getElementById('senha-maiuscula-error').style.display = "none";  /*chama mensagem definida no html (senha inválida) e a deixa invisivel*/
            }
           
        }

        // confirmacao de senha validacao
        if (confirmacao === '') {/*se o campo confirmação de senha estiver vazio será marcado como inválido*/
            document.getElementById('confirmacao-required-error').style.display = "block"; /*chama mensagem definida no html (campo confirmação de senha não pode estar vazio) e a deixa visivel*/ 
        } else {
            document.getElementById('confirmacao-required-error').style.display = "none";/*chama mensagem definida no html (campo confirmação de senha não pode estar vazio) e a deixa invisivel*/   
            if (confirmacao != senha ) {/*verifica se senha e confirmacao sao iguais*/
                valido = false
               document.getElementById('confirmacao-invalid-error').style.display = "block";  /*chama mensagem definida no html (confirmação de senha inválida) e a deixa visivel*/ 
            }else{
                 document.getElementById('confirmacao-invalid-error').style.display = "none";  /*chama mensagem definida no html (confirmação de senha inválida) e a deixa invisivel*/ 
            }
        }

        if (valido) {/*a variavel valido inicia como true, case falhe em alguma das verificações se toorna false, se ao final permanecer como true a mensagem predefinida no html (cadastro realizado) ficará visivel*/
        
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       
        nomeServer: nome,
        emailServer: email,
        senhaServer: senha,
        dtNascimentoServer: nascimento
      }),
      })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {

          setTimeout(() => {
             window.location.href = './login.html'; //Direciona para a pagina login
          }, "2000");
          limparFormulario();
          finalizarAguardar();
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
      });
 
        }
        }
        