PROBLEMA:
realizzare uno pseudo Whatsapp, app di messaggistica dove l'utente può chattare con altri utenti che ha nella propria lista dei contatti.
L'interfaccia e le funzioni disponibili permettono all'utente di visualizzare la lista di utenti con cui chatta e un motore di ricerca che aiuti in questa operazione. Per quanto riguarda la funzione principale di messaggistica, il pannello destro permette di visualizzare i messaggi, distinti per colore, contrassegnati dalla data di invio, e con un menu a tendina per essere eliminati.

DEFINIZIONE DEL PROBLEMA:
Data un interfaccia divisa in sezione sinistra -social e lista amici, e una sezione destra -messagistica, visualizzare in maniera dinamica gli oggetti ivi presenti, i singoli contatti corrispondono ad una lista formata da tutti i singoli messaggi.
Sono indispensabili funzionalità...
che permettano di clickare sui contatti e mostrare la relativa chat;
inviare un nuovo messaggio;
ricercare tra i contatti;
cancellare i messaggi inviati.

COMPONENTI:
- applicazione: vedi il programma nella sua interezza
  - pannello lista contatti
    - mio account
    - toggle notifiche
    - motore di ricerca interno
    - lista di amici corredati con immagine, nome, bio e data ultimo accesso
  - pannello di conversazione
    - utente selezionato corredato da info
      - bottoni di interazione
    - schermata messaggi della conversazione attiva (thread)
    - barra per la scrittura ed invio dei messaggi

RACCOLTA DATI:
Il layout da realizzare è chiaramente simile a Whatsapp originale.
Le funzioni richieste sono state interamente definite dal cliente.
E' stata consigliata la struttura dell'array dei contatti;
E' stato consigliato l'uso della libreria API di Luxon per la gestione dei valori delle date;

ANALISI DATI:
Dato che il layout grafico e le funzionalità sono state definite, dividere il lavoro in Milestone per grado di specificità della funzione.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Milestone 1:
- replica della grafica
- visualizzazione dinamica della lista contatti tramite v-for per visualizzare nome e immagine di ogni contatto
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Milestone 2:
- visualizzazione dinamica dei messaggi tramite v-for per visualizzare i messaggi di ogni singolo contatto, all'interno del pannello di conversazione
- click sul contatto per mostrarne la conversazioneà
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Milestone 3:
- aggiunta messaggio: l'utente scrive un messaggio che viene aggiunto alla conversazione (thread)
- messaggio di risposta: quando l'utente manda un messaggio, riceve come risposta un "ok" da parte dell'altro utente, dopo 1 secondo di tempo.




