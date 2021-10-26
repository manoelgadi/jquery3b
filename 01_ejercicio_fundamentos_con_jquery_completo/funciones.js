var super_id = 2;
function enviarFormulario() {
	$("#table_body").after('<tr id="nf"> </tr>');	
	var nf = $("#nf");
	l = ["campo_nombre", "campo_apellidos", "campo_fecha"]
	for(i in l){
		nf.append('<td> ' + $("#"+l[i]).val()+ ' </td>');
	}
	s = ["campo_sexo_hombre", "campo_sexo_mujer", "campo_sexo_otro","campo_sexo_no_especificado"];
	v = ["Hombre","Mujer","Otro","No especificado"];
	vacio = true;
	for(i in s){
		if ($('#'+s[i]).prop('checked')) {
			nf.append('<td> '+v[i]+' </td>');
			vacio = false;
		}
	}
	if(vacio){
		nf.append('<td> </td>');
	}
    if ($('#campo_tiempo_parcial').prop('checked')) {
		nf.append('<td><img src="ok.png" width="32" alt="Sí"></td>');
	} else {
		nf.append('<td><img src="ko.png" width="32" alt="No"></td>');
	}
	nf.append('<td> <button class="borrar" name="' + super_id.toString() + '"> BorrarJquery </button></td>');
	nf.attr("id",super_id); 
	
	super_id +=1;
	
	$(document).ready(function(){
		//$("button.borrar").click(function(){$(this).parent().parent().remove()});
		$("button.borrar").click(function(){$("#"+this.name).remove()});
		//$("button.borrar").click(function(){alert("#"+this.name)});
	});
}


