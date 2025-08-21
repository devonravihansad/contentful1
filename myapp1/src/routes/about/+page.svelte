<script>
  import { onMount } from "svelte";
  import { initializeApp } from "firebase/app";
  import { getFirestore, collection, getDocs } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyC7Wd5h8lUJSHgtpfPAaJkg0uG-KzQHT78",
    authDomain: "my-wedding-ef991.firebaseapp.com",
    projectId: "my-wedding-ef991",
    storageBucket: "my-wedding-ef991.firebasestorage.app",
    messagingSenderId: "675972461424",
    appId: "1:675972461424:web:a666920d3e6dadba19d5b5",
    measurementId: "G-YH3G95Q0LG"
  };

  let albums = [];

  onMount(async () => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const querySnapshot = await getDocs(collection(db, "albums"));
    albums = querySnapshot.docs.map(doc => doc.data());
  });
</script>

{#each albums as album}
  <div>
    <h2>{album.title}</h2>
    <p>{album.artist}</p>
  </div>
{/each}
