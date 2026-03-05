export interface Product {
  id: string;
  name: string;
  description: string;
  ingredients: string;
  benefits: string;
  safety: string;
  usage: string;
  image: string;
  systemPrompt: string;
}

export const products: Product[] = [
  {
    id: "grapefruit-enzyme-shampoo",
    name: "Dầu gội Enzyme chiết xuất từ Bưởi",
    description: "Sản phẩm chăm sóc tóc ứng dụng công nghệ enzyme sinh học kết hợp tinh chất bưởi tự nhiên, giúp làm sạch da đầu, giảm gãy rụng và kích thích mọc tóc an toàn.",
    ingredients: "Chiết xuất vỏ bưởi (Citrus Grandis Extract), Enzyme sinh học (Protease, Lipase, Amylase), Vitamin B5 (Panthenol), Tinh dầu bưởi tự nhiên.",
    benefits: "Làm sạch sâu da đầu, giảm gàu, giảm ngứa, hỗ trợ giảm rụng tóc, kích thích mọc tóc con, giúp tóc mềm mượt, chắc khỏe.",
    safety: "Thành phần thiên nhiên an toàn. Hạn chế hóa chất mạnh gây kích ứng. Phù hợp với nhiều loại tóc, kể cả da đầu nhạy cảm.",
    usage: "Làm ướt tóc, lấy một lượng dầu gội vừa đủ, massage nhẹ nhàng 2-3 phút, sau đó xả sạch với nước. Nên sử dụng 3-4 lần/tuần.",
    image: "https://images.unsplash.com/photo-1585232561307-3f83b3b70681?q=80&w=600&auto=format&fit=crop",
    systemPrompt: `Bạn là trợ lý AI của sản phẩm "Dầu gội Enzyme chiết xuất từ Bưởi".
    Nhiệm vụ của bạn là tư vấn cho khách hàng về công dụng, thành phần và cách dùng sản phẩm dựa trên thông tin chi tiết sau:

    1. Giới thiệu: Dầu gội Enzyme chiết xuất từ bưởi là sản phẩm chăm sóc tóc ứng dụng công nghệ enzyme sinh học kết hợp tinh chất bưởi tự nhiên.
    2. Thành phần chính:
       - Chiết xuất vỏ bưởi (Citrus Grandis Extract): Giàu flavonoid, vitamin C.
       - Enzyme sinh học (Protease, Lipase, Amylase): Hỗ trợ phân giải bã nhờn và tế bào chết.
       - Vitamin B5 (Panthenol): Dưỡng ẩm và phục hồi tóc hư tổn.
       - Tinh dầu bưởi tự nhiên: Giúp tóc thơm mát và giảm rụng.
    3. Cơ chế hoạt động: Enzyme sinh học phân giải protein thừa, dầu nhờn mà không làm tổn thương lớp bảo vệ tự nhiên. Chiết xuất bưởi kích thích tuần hoàn máu, hỗ trợ mọc tóc.
    4. Công dụng: Làm sạch sâu, giảm gàu, giảm ngứa, giảm rụng tóc, kích thích mọc tóc con, giúp tóc mềm mượt.
    5. Ưu điểm: Không gây khô da đầu, thành phần thiên nhiên an toàn, hạn chế hóa chất mạnh.
    6. Đối tượng sử dụng: Người bị rụng tóc, tóc yếu, da đầu nhiều dầu, học sinh, sinh viên.

    Phong cách trả lời:
    - Chuyên nghiệp, am hiểu về công nghệ sinh học và chăm sóc tóc.
    - Nhấn mạnh vào sự kết hợp giữa "Enzyme sinh học" và "Tinh chất bưởi".
    - Luôn trả lời bằng tiếng Việt.
    `
  }
];
