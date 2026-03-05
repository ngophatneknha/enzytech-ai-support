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
  },
  {
    id: "mint-enzyme-shampoo",
    name: "Dầu gội Trị gàu Enzyme Bạc hà",
    description: "Công thức đột phá với enzyme và tinh chất bạc hà, giúp làm sạch gàu, giảm ngứa và mang lại cảm giác mát lạnh sảng khoái.",
    ingredients: "Enzyme (Ketoconazole-like), Tinh chất bạc hà, Salicylic Acid, Chiết xuất cây trà.",
    benefits: "Sạch gàu hiệu quả, ngăn gàu quay trở lại, giảm ngứa da đầu, kiềm dầu, cảm giác mát lạnh.",
    safety: "Không dùng cho da đầu có vết thương hở. Tránh tiếp xúc với mắt.",
    usage: "Làm ướt tóc, massage nhẹ nhàng với dầu gội, giữ trong 2-3 phút rồi xả sạch. Dùng 2-3 lần/tuần.",
    image: "https://images.unsplash.com/photo-1627635079132-504048913342?q=80&w=600&auto=format&fit=crop",
    systemPrompt: `Bạn là trợ lý AI của sản phẩm "Dầu gội Trị gàu Enzyme Bạc hà". Hãy tư vấn về hiệu quả trị gàu, cảm giác mát lạnh và cách sử dụng để đạt hiệu quả tốt nhất.`
  },
  {
    id: "enzyme-dish-soap",
    name: "Nước rửa chén Enzyme Sinh học",
    description: "Làm sạch dầu mỡ hiệu quả, an toàn cho da tay và thân thiện với môi trường nhờ công nghệ enzyme.",
    ingredients: "Enzyme (Protease, Lipase), Chiết xuất chanh, Chất hoạt động bề mặt từ dừa.",
    benefits: "Đánh bay dầu mỡ, khử mùi tanh, mềm mại da tay, tự phân hủy sinh học.",
    safety: "An toàn cho cả gia đình, không chứa hóa chất độc hại.",
    usage: "Pha loãng với nước hoặc cho trực tiếp lên miếng rửa chén đã làm ướt.",
    image: "https://images.unsplash.com/photo-1628191013085-990d39ec25b8?q=80&w=600&auto=format&fit=crop",
    systemPrompt: `Bạn là trợ lý AI của sản phẩm "Nước rửa chén Enzyme Sinh học". Hãy tư vấn về khả năng làm sạch, độ an toàn và các thành phần tự nhiên của sản phẩm.`
  },
  {
    id: "enzyme-hand-sanitizer",
    name: "Gel rửa tay khô Enzyme",
    description: "Làm sạch tay nhanh chóng, diệt khuẩn mà không cần dùng nước, bổ sung enzyme giúp da tay mềm mại.",
    ingredients: "Ethanol 70%, Enzyme (Lysozyme), Chiết xuất lô hội, Tinh dầu tràm trà.",
    benefits: "Sạch khuẩn 99.9%, không gây khô da, tiện lợi, hương thơm tự nhiên.",
    safety: "Chỉ dùng ngoài da. Tránh tiếp xúc với mắt.",
    usage: "Cho một lượng nhỏ vào lòng bàn tay, xoa đều cho đến khi tay khô.",
    image: "https://images.unsplash.com/photo-1584735935639-4c028a1fac2c?q=80&w=600&auto=format&fit=crop",
    systemPrompt: `Bạn là trợ lý AI của sản phẩm "Gel rửa tay khô Enzyme". Hãy tư vấn về khả năng diệt khuẩn, ưu điểm không gây khô da và sự tiện lợi của sản phẩm.`
  },
  {
    id: "organic-enzyme-laundry-detergent",
    name: "Nước giặt xả Enzyme Hữu cơ",
    description: "Giặt sạch sâu các vết bẩn cứng đầu bằng sức mạnh của enzyme, kết hợp xả vải giúp quần áo mềm mại và thơm lâu.",
    ingredients: "Enzyme (Protease, Amylase), Chất hoạt động bề mặt hữu cơ, Tinh dầu hoa oải hương.",
    benefits: "Giặt sạch, giữ màu vải, làm mềm quần áo, hương thơm bền lâu, thân thiện với máy giặt và môi trường.",
    safety: "An toàn cho da nhạy cảm, kể cả da em bé. Không chứa phốt phát, clo.",
    usage: "Sử dụng 1 nắp cho 1 lần giặt thông thường (khoảng 15-20 chiếc quần áo).",
    image: "https://images.unsplash.com/photo-1608564843148-ac2f1a39151a?q=80&w=600&auto=format&fit=crop",
    systemPrompt: `Bạn là trợ lý AI của sản phẩm "Nước giặt xả Enzyme Hữu cơ". Hãy tư vấn về khả năng giặt sạch vết bẩn, công dụng làm mềm vải và tính an toàn cho da nhạy cảm.`
  }
];
