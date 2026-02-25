function greet(name: string, umur: number): string {
    return `Halo, ${name}! Umur kamu ${umur} tahun. Selamat belajar TypeScript.`;
}

const namaMahasiswa = "Ghina Audhiya Khairunisa";
const umur: number = 19;

console.log(greet(namaMahasiswa, umur));