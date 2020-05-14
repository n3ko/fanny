<script>
	let x = new Array(20).fill(new Array(20).fill({id: 1, name: 1}))
</script>
<style>
#r {
background-image: url("/r1.jpeg");
background-repeat: no-repeat;
padding-left:0;
padding-top: 0;
background-size: 1315px 1317px;
}
.t {
border-collapse: collapse;
}

td {
font-family: times,serif;
font-size: 18pt;
height: 60.4px;
text-align: center;
vertical-align: middle;
width: 63px !important;
padding: 0;
border: 3px solid #ccc;
}
td input {
font-size: 40pt;
background-color:rgba(0,0,0,0) !important;
border: 0 solid #fff;
margin: 0;
padding: 0;
outline: medium none;
text-align: center;
width: 63.5px;
}
</style>
<div id=r> 
<table cellspacing="0" cellpadding="0" class="t"> 
<tbody>

{#each x as cats, i}
	<tr>
	{#each cats as { id, name }, i}
	   <td><input maxlength=1 size=2></td>
	{/each}
	</tr>
{/each}
	</tbody></table></div>
