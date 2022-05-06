var i=0;
var i1=0;
function Random(min,max)
{
	return Math.floor(Math.random() * (max-min))+min;
}
function changeColor(){
	i1=i;
	i=Random(1,9);
	if(i1!=i)
	{
	if(i==1)
	{
        document.getElementById('name').innerHTML="Word";
		document.getElementById('ph').src="images/word.png"; 
		document.getElementById('text').innerHTML="Это приложение Windows, предназначенное для создания, просмотра, модификации и печати текстовых документов.";
		document.getElementById('button').setAttribute("href","files/word.torrent");
    }
    if(i==2)
	{
		document.getElementById('name').innerHTML="Powerpoint";
		document.getElementById('ph').src='images/powerpoint.png'; 
		document.getElementById('text').innerHTML="Бесплатная программа содержит встроенный набор разнообразных драйверов. После сканирования системы драйверы ищутся внутри базы, то есть подключение к интернету не обязательно.";
		document.getElementById('button').setAttribute("href","files/powerpoint.torrent");
		
    }
	if(i==3)
	{
		document.getElementById('name').innerHTML="Recuva";
		document.getElementById('ph').src='images/recuva.png'; 
		document.getElementById('text').innerHTML="Приложение, способное восстанавливать удаленные файлы на дисках, флешках, картах памяти и других носителях.";
		document.getElementById('button').setAttribute("href","files/recuva.torrent");
	
	}
	if(i==4)
	{
		document.getElementById('name').innerHTML="Ccleaner";
		document.getElementById('ph').src='images/cleaner.png'; 
		document.getElementById('text').innerHTML="Компактная утилита, предназначенная для очистки жёсткого диска и системного реестра Windows.";
		document.getElementById('button').setAttribute("href","files/cleaner.torrent");
		 
	}
	if(i==5)
	{
		
		document.getElementById('name').innerHTML="Driverpack Solution";
		document.getElementById('ph').src='images/driverpack.png'; 
		document.getElementById('text').innerHTML="Бесплатная программа содержит встроенный набор разнообразных драйверов. После сканирования системы драйверы ищутся внутри базы, то есть подключение к интернету не обязательно.";
		document.getElementById('button').setAttribute("href","files/driverpack.torrent");
	}
	if(i==6)
	{
		
		document.getElementById('name').innerHTML="DriverHub";
		document.getElementById('ph').src='images/hub.png'; 
		document.getElementById('text').innerHTML="Программа для поиска и обновления драйверов на компьютерах и ноутбуках с лаконичным интерфейсом.";
		document.getElementById('button').setAttribute("href","files/DriverHub.torrent");
	}
	if(i==7)
	{
		
		document.getElementById('name').innerHTML="Photoshop";
		document.getElementById('ph').src='images/shop.png'; 
		document.getElementById('text').innerHTML="Многофункциональный графический редактор, разрабатываемый и распространяемый компанией Adobe Systems.";
		document.getElementById('button').setAttribute("href","files/photoshop.torrent");
	}
	if(i==8)
	{
		
		document.getElementById('name').innerHTML="Sony vegas";
		document.getElementById('ph').src='images/vegas.png'; 
		document.getElementById('text').innerHTML="Профессиональная программа для многодорожечной записи, редактирования и монтажа видео и аудио потоков.";
		document.getElementById('button').setAttribute("href","files/vegas.torrent");
	}
	}
	else{
		changeColor();
	}
	return false;
}
