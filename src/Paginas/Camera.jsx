import { useRef, useState, useEffect } from "react";

export function Camera({ onFotoTirada }) {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const [fotos, setFotos] = useState(() => {
        const saved = localStorage.getItem("imagens");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        iniciarCamera();
    }, []);

    const iniciarCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error("Erro ao acessar a câmera: ", error);
        }
    };

    const tirarFoto = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imagem = canvas.toDataURL("image/png");

        const novasFotos = [...fotos,imagem];

        setFotos(novasFotos);
        localStorage.setItem("imagens", JSON.stringify(novasFotos));

        onFotoTirada(imagem);
    };

    const limparFotos = () => {
        alert("Todas as fotos foram removidas com sucesso!");
        setFotos([]);
        localStorage.removeItem("imagens");
    };

    return (
        <section className="camera-box">
            <h2>Captura de Imagem</h2>

            <aside className="preview">
                <video ref={videoRef} autoPlay playsInline aria-label="fluxo da câmera" />
            </aside>

            <aside className="botoes">
                <button onClick={tirarFoto} className="btn-acao">Tirar foto</button>
            </aside>

            {/* Grade de fotos */}
            <aside className="galeria">
                {fotos.map((foto, index) => (
                    <img key={index} src={foto} alt={`Foto ${index}`} />
                ))}
            </aside>

            <article>
                <button onClick={limparFotos}>Limpar fotos</button>
            </article>
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
        </section>
    );
}
