<html>
<head>
<title>Cadastro de Contatos - login....</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link rel="stylesheet" type="text/css" href="estilo.css"/>
<script src="jquery.js" type="text/javascript" language="javascript"></script>
<script language="javascript">

</script>
<style type="text/css">
body {
font-family:Verdana, Arial, Helvetica, sans-serif;
font-size:11px;
}
.top {
margin-bottom: 15px;
}
.buttondiv {
margin-top: 10px;
}
.messagebox{
	position:absolute;
	width:100px;
	margin-left:30px;
	border:1px solid #c93;
	background:#ffc;
	padding:3px;
}
.messageboxok{
	position:absolute;
	width:auto;
	margin-left:30px;
	border:1px solid #349534;
	background:#C9FFCA;
	padding:3px;
	font-weight:bold;
	color:#008000;

}
.messageboxerror{
	position:absolute;
	width:auto;
	margin-left:30px;
	border:1px solid #CC0000;
	background:#F7CBCA;
	padding:3px;
	font-weight:bold;
	color:#CC0000;
}
</style>
</head>
<body>
<br>
<br>
<br>
<div id="demos" align="center">
<h2 align="center">Login - Valida��o de login...</h2><br clear="all" /><br clear="all" />
<div id="s4">
     <div class="form" id="first">
          <form name= "form" method="POST" action="validarlogin_cripto.php" id="login_form">
                <br clear="all" />
				<div class="heading" style=" width:183px;">Login</div>
				<br clear="all" /><br clear="all" />
                <div style="margin-top:5px">
                     Usuario..: <input name="usuario" type="text" id="usuario" value="" maxlength="20" />
                </div>
                <div style="margin-top:5px" >
                     Senha....: <input name="senha" type="password" id="senha" value="" maxlength="20" />
                </div>
                <br>
                <input name="enviar" type="submit" id="enviar" value="enviar" >
          </form>
     </div>
   </div>
</div>
</body>
</html>
