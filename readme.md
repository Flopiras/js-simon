**DESCRIZIONE**

Visualizzare in pagina 5 numeri casuali diversi. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

_Bonus:_

Mostriamo il countdown dei 30 secondi in pagina
Facciamo inserire i numeri all'utente tramite 5 campi di input invece che via prompt

<hr>

**TO DO:**

0. recuperare gli elementi dal DOM
1. mettere in ascolto il bottone
2. preparare una funzione per generare 5 numeri casuali
3. al click del bottone:
   - disabilitare il bottone(o farlo scomparire)
   - far apparire i numeri generati in pagina
   - far partire una scansione del tempo che avanza per ogni secondo
     - stamparlo in pagina
   - interrompere la scansione del tempo dopo 30 secondi
     - far scomparire i numeri
     - far apparire gli input dove l'utente piò inserire i numeri
       mettere in ascolto il secondo bottone - recuperare i numeri inseriti dall'utente - verificare quali numeri (di quelli inseriti dall'utente) corrispondono a quelli generati random dalla funzione - stampare il respondo in pagina
