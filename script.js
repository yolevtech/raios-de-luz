function baixarEnsinamento(numero) {
    const url = `ensinamentos/ensinamento${numero}.pdf`;
    const novaJanela = window.open(url, '_blank');
  
    // Quando a nova aba for fechada, marca como lido
    const intervalo = setInterval(() => {
      if (novaJanela.closed) {
        localStorage.setItem(`ensinamento${numero}_lido`, 'true');
        liberarProximos();
        clearInterval(intervalo);
      }
    }, 1000);
  }
  
  function liberarProximos() {
    if (localStorage.getItem('ensinamento1.1_lido')) {
      document.getElementById('btn1_2')?.removeAttribute('disabled');
    }
    if (localStorage.getItem('ensinamento1.2_lido')) {
      document.getElementById('btn1_3')?.removeAttribute('disabled');
    }
    if (localStorage.getItem('ensinamento1.3_lido')) {
      document.getElementById('btn2_1')?.removeAttribute('disabled');
    }
    if (localStorage.getItem('ensinamento2.1_lido')) {
      document.getElementById('btn2_2')?.removeAttribute('disabled');
    }
    if (localStorage.getItem('ensinamento2.2_lido')) {
      document.getElementById('btn2_3')?.removeAttribute('disabled');
    }
  }
  
  window.onload = liberarProximos;
  
  function alternarMusica() {
    const audio = document.getElementById('audioFundo');
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  