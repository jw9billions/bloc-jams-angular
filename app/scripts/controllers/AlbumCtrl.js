(function (){
	 function AlbumCtrl(Fixtures) {
         this.albumData = Fixtures.getAlbum();
		 this.SongPlayer = SongPlayer;
     }
	angular
		.module('blocJams')
		.controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);

})();


