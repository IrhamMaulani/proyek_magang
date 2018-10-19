    //TODO Give all CSRF 

    
    let nomorAntrian = 0;
    let jumlahAntrian = 100;
    let nomorAntrianBiru = parseInt($('#jumlah-pasien-biru').html());
    console.log("haha" + nomorAntrianBiru);
    let nomorAntrianPink = parseInt($('#jumlah-pasien-pink').html());
    let nomorAntrianHijau = parseInt($('#jumlah-pasien-hijau').html());
    let suara1 = new Audio("../sounds/1.wav");
  /*   var suara1 = new Howl({
        src: ['1.wav'],
        preload : false
      }); */
    let suara2 = new Audio("../sounds/2.wav");
    let suara3 = new Audio("../sounds/3.wav");
    let suara4 = new Audio("../sounds/4.wav");
    let suara5 = new Audio("../sounds/5.wav");
    let suara6 = new Audio("../sounds/6.wav");
    let suara7 = new Audio("../sounds/7.wav");
    let suara8 = new Audio("../sounds/8.wav");
    let suara9 = new Audio("../sounds/9.wav");
    let suara10 = new Audio("../sounds/sepuluh.wav");
    let suara11 = new Audio("../sounds/sebelas.wav");
    let suaraBelas = new Audio("../sounds/belas.wav");
    let suaraPuluh = new Audio("../sounds/puluh.wav");
    let suaraHijau = new Audio("../suara/hijau.mp3");
    let suaraBiru = new Audio("../suara/biru.mp3");
    let suaraPink = new Audio("../suara/merah_muda.mp3");
    let suaraNomorAntrian = new Audio("../sounds/nomor-urut.wav");
    let kosong = new Audio("../suara/kosong.mp3");

    

    function merubahJumlah() {
        $("#jumlah-pasien").html(parseInt($('#jumlah-pasien-biru').html()) + parseInt($('#jumlah-pasien-pink').html()) + parseInt($('#jumlah-pasien-hijau').html()));
    }

    $(document).ready(function () {

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }

        });
    });

    $("#btnBiru").click(function () {
        nomorAntrianBiru++;
        let warnaAntrian = 'biru';

        insertData(nomorAntrianBiru, warnaAntrian);

        $("#jumlah-pasien-biru").html(nomorAntrianBiru);

        console.log(nomorAntrianBiru);
        suaraNomorAntrian.play();

        console.log(nomorAntrianBiru + 'biru');


        setTimeout(function () {
            konvertAngka(nomorAntrianBiru);


        }, 1300);

        setTimeout(function () {
            suaraBiru.play();
        }, jedaSuara(nomorAntrianBiru));


        merubahJumlah();
    });

    $("#btnBiruUlang").click(function () {
        suaraNomorAntrian.play();


        setTimeout(function () {
            konvertAngka(nomorAntrianBiru);
        }, 1300);

        setTimeout(function () {
            suaraBiru.play();
        }, jedaSuara(nomorAntrianBiru));
    });


    $("#btnPink").click(function () {
        nomorAntrianPink++;
        let warnaAntrian = 'pink';

        insertData(nomorAntrianPink, warnaAntrian);



        $("#jumlah-pasien-pink").html(nomorAntrianPink);

        suaraNomorAntrian.play();


        setTimeout(function () {
            konvertAngka(nomorAntrianPink);
        }, 1300);

        setTimeout(function () {
            suaraPink.play();
        }, jedaSuara(nomorAntrianPink));

        merubahJumlah();
    });

    $("#btnPinkUlang").click(function () {
        suaraNomorAntrian.play();

        setTimeout(function () {
            konvertAngka(nomorAntrianPink);
        }, 1300);

        setTimeout(function () {
            suaraPink.play();
        }, jedaSuara(nomorAntrianPink));
    });

    $("#btnHijau").click(function () {
        nomorAntrianHijau++;

        let warnaAntrian = 'hijau';

        insertData(nomorAntrianHijau, warnaAntrian);



        $("#jumlah-pasien-hijau").html(nomorAntrianHijau);

        suaraNomorAntrian.play();


        setTimeout(function () {
            konvertAngka(nomorAntrianHijau);
        }, 1300);

        setTimeout(function () {
            suaraHijau.play();
        }, jedaSuara(nomorAntrianHijau));
        merubahJumlah();
    });

    $("#btnHijauUlang").click(function () {
        suaraNomorAntrian.play();

        setTimeout(function () {
            konvertAngka(nomorAntrianHijau);
        }, 1300);

        setTimeout(function () {
            suaraHijau.play();
        }, jedaSuara(nomorAntrianHijau));
    });

    $("#tombol-reset").click(function () {
        suara1.play();
        alert("hhh");
    });

    let suara = [kosong, suara1, suara2, suara3, suara4, suara5, suara6, suara7, suara8, suara9, suara10];

    function konvertAngka(n) {
        console.log("N" + n);


        if (n <= 10) {
            console.log("eksekusi");
            return suara[n].play();
            
        } else if (n == 10) { // khusus untuk sepuluh
            return suara10.play();
            
        } else if (n == 11) { // khusus untuk sebelas
            return suara11.play();
        } else if (n < 20) { // 12 -19
            return suara[(n - 10)].play() +
                setTimeout(function () { suaraBelas.play(); }, 700);

        } else if (n < 100) { // 20 -99


            return suara[(n - (n % 10)) / 10].play() +  setTimeout(function () { suaraPuluh.play(); }, 550) + setTimeout(function () { suara[(n % 10)].play(); }, 1000);

        }
    }

    function jedaSuara(nomorAntrian) {
        let jeda = 0;

        if (nomorAntrian > 30) {
            return jeda = 3000;

        }
        else if (nomorAntrian > 20) {
            return jeda = 3000;
        }
        else if (nomorAntrian > 10 && nomorAntrian <= 20) {
            return jeda = 2500;
        }
        else {
            return jeda = 2100;
        }
    }

    function insertData(nomorAntrian, warnaAntrian) {
        $.ajax({
            method: "POST",
            url: "/admin/antrian",
            data: {
                nomorAntrian: nomorAntrian,
                warnaAntrian: warnaAntrian
            }
        })
            .done(function (data) {
                console.log(data.success);
            });
    }


    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    let update;
    (update = function () {
        document.getElementById("waktu")
            .innerHTML = moment().format('dddd, Do - MMMM - YYYY, h:mm:ss') + " WITA";
    })();
    setInterval(update, 1000);
    
            /* Halaman untuk mengambil data pasien */
            $("#cariData").click(function () {
                let identitas = $("#inputIdentitas").val();
                $("#namaPasien").val("");
                $("#nomorBuku").val("");
                $("#dataKosongNotif").html("");
                console.log(identitas);
    
                $.ajax({
                    method: "GET",
                    url: "/admin/antrian/" + identitas,
                    data: identitas,
                })
                    .done(function (data) {
                        console.log(data);
                        $("#namaPasien").val(data.name_pasien);
                        $("#nomorBuku").val(data.nomor_buku_pasien);
                        if(data == 'error'){
                            $("#dataKosongNotif").html("Data Tidak Ditemukan");
                        }
                        
                    });
            });
    
    
            $('input[name="radioJenisBerobat"]').change(function () {
                if($('#radioJenisBerobatBpjs').prop('checked')){
                    $('#formBpjs').show();
                    $('#inputBPJS').val('');
                    
                }
                else{
                    $('#formBpjs').hide();
                    $('#inputBPJS').val('kosong');
                }
            });
    
    
    
            $("#formDataPasienBaru").submit(function (e) {
                let namaPasien = $("#inputNama").val();
                
    
            e.preventDefault();
    
            let formData = new FormData(this);
            
            /* formData.append('namaPasien', namaPasien); */
            /* console.log(formData); */
    
            $.ajax({
                method: "POST",
                url: "/admin/pasien",
                contentType: false,
                processData: false,
                data: formData,
            })
                .done(function (data) {
                    console.log(data.success);
                    document.getElementById("formDataPasienBaru").reset();
                    
                });
            
            });
    