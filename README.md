# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

  Proses pembuatan component dan serta penjelasan react Hooks yang digunakan 
- fitur Todo List ini menampilkan jumlah total Task yang ada di dalam todo list. Jumlah ini
- nilainya akan sama dengan jumlah total tugas yang ada di todo list, akan bertambah jika
- ada tugas baru yang dimasukan didalam todo list dan akan berkurang jika tugas di
- dalam todo list selesai/dihapus/dibatalkan. Sehingga jumlah total ini tersimpan ke dalam variable
- state dengan menggunakan React Hook useState.
- Terdapat juga fitur menampilkan data serta jumlah total yang dihapus dibatalkan dan selesai.
- serta menambahkan useEffect ketika baru dibuka akan menampilkan "Selamat datang" dan ketika ditutup akan merefresh dan menutup.
