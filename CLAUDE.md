# K THE GOAT — Portfolio của NamK (Y Nam Knul)

File bàn giao cho Claude ở những cuộc trò chuyện sau. Đọc hết file này trước khi sửa bất cứ thứ gì.
Chủ dự án nói chuyện bằng tiếng Việt, xưng "mình/tôi". Hãy trả lời bằng tiếng Việt.

## 1. Trạng thái hiện tại (cập nhật 29/10/2026)

- **Trang đang chạy:** https://kthegoat.vercel.app
- **Kho code:** GitHub `namkzhongli/kthegoat-portfolio`, nhánh `main`.
- **Vercel:** project `kthegoat` (id `prj_2st01NdlKCzC8ehrlKi3dpPHrMhx`), tài khoản Hobby `namkzhongli-3019`. Project đã nối với kho GitHub nên **mỗi lần push lên `main` là Vercel tự deploy bản production**. Không có bước build: đây là trang tĩnh.
- **Tên miền riêng:** chưa có. Chủ dự án từng được gợi ý `kthegoat.com`; nếu mua, phải báo giá và xin xác nhận trước.
- **Bản xem thử trong Claude:** artifact "K THE GOAT" thuộc một cuộc trò chuyện đã bị xóa. Không cần dùng lại; hãy kiểm tra trên Vercel.
- **Trên máy chủ dự án:** `Desktop/PRO 5/` chứa ảnh gốc (dung lượng lớn). `Desktop/PRO 5/portfolio/site/` là một bản sao cũ của trang, **kho GitHub mới là bản chuẩn**.

Chủ dự án đã duyệt bản này ("tương đối ổn rồi") và cho đưa lên Vercel.

## 1b. Trang dự án riêng cho từng thương hiệu (cập nhật 29/10/2026)

- **Đã làm cho 8/9 thương hiệu** (mọi thương hiệu trừ Embé, vì Embé không có tư liệu). Link trực tiếp: `#bv`, `#com`, `#kimmy`, `#zojy`, `#astro`, `#meow`, `#kaza`, `#dd`. KAZA là bản đầy đủ nhất (có thêm Con số, Cột mốc, Hậu trường); các trang khác dùng chung khuôn, phần nào không có dữ liệu thì tự bỏ. Chủ dự án chọn hướng "C": bấm nút "Xem dự án" ở chương KAZA (mục Dự án), bấm vào ảnh chương, hoặc bấm ô logo KAZA ở mục Thương hiệu → ảnh trong khối đa giác bay ra toàn màn hình, chuyển đen trắng sang màu, có vệt sáng chrome quét ngang, rồi tên thương hiệu trồi lên và giải mã chữ.
- Bên trong: màn đầu (logo, tên lớn, 4 ô thông tin) → (01) Khởi đầu → (02) Con số (nền đen) → (03) Việc đã làm (ảnh dính bên phải đổi theo dòng đang đọc) → (04) Những đêm (dải ảnh trượt ngang, dính màn hình) → (05) Cột mốc → (06) Hậu trường → chân trang đen, chữ chạy "Keep All Zeal Alive", nút "Chương tiếp theo".
- **Code:** `CASES` (ảnh, kích thước, chú thích, mốc) và `I18N[lang].cases.kaza` (chữ). `BRANDS[i].cs = 'kaza'` bật trang cho thương hiệu đó. Các hàm `renderCase`, `buildCaseFX`, `openCase`, `closeCase`, `requestClose`. Trang là lớp phủ `#cs` có thanh cuộn riêng (Lenis riêng, ScrollTrigger dùng `scroller: cs`); Lenis chính dừng lại và `main` bị `inert` khi trang mở. Đóng bằng nút Đóng, phím Esc, hoặc nút Back của trình duyệt.
- **Làm thương hiệu tiếp theo:** thêm khóa vào `CASES` + `I18N.vi/en.cases`, đặt `cs` trong `BRANDS`, ảnh vào `img/<tên>/` (nén 1500–1800px, q78). Ảnh trong mỗi dự án xếp **theo nhịp sáng/tối** (chủ dự án yêu cầu), không theo ngày; dòng thời gian vẫn theo ngày.
- Ảnh trên toàn trang **giữ màu gốc** (đã bỏ `grayscale`).
- Ảnh từng thương hiệu nằm ở `img/bv`, `img/com`, `img/kimmy`, `img/zojy`, `img/astro`, `img/meow`, `img/kaza`, `img/dd` (lấy từ Drive, đã chọn tạm, chủ dự án sẽ tự thay nếu không ưng). Logo ZOJY và ASTRO đã thêm vào `_project/logos-original/` và `process_logos.py`.
- **Dữ kiện KAZA (chủ dự án xác nhận):** bắt đầu 13.10.2024, khi quán vừa xây xong; chức danh **Giám Đốc Sáng Tạo** (không chỉ Marketing); đội Sáng tạo 4 → 7 người; điều phối 100+ nhân sự toàn quán; 3 kênh TikTok (kênh lớn nhất 100K người theo dõi, video cao nhất 7M lượt xem); tự xây Game Night, Ladies Night (chương trình của chính KAZA, không phải bên thứ ba), From The Chef – Món ngon mời bạn (mời món miễn phí tối thứ 6 hàng tuần), Performance; chiến dịch KAZA Carnival, KAZA có gì vui?, KAZA's Special – Món này bếp khen; ảnh điện thoại quay là ảnh hậu trường của đội. Ảnh đã chọn tạm, chủ dự án sẽ tự thay nếu không ưng.
- Ảnh gốc nằm trên Google Drive của chủ dự án (thư mục "NamK Portfolio", có thư mục con cho từng thương hiệu/đêm diễn). Công cụ Drive tải được ảnh ≤ ~6 MB; ảnh lớn hơn phải nhờ chủ dự án gửi trong chat.

### Đã làm xong ngày 29/10/2026 (chủ dự án nói "làm tất tần tật")
- Chữ ký 3D: **đen nhám**, thành bên than chì tối, cộng một **đường viền sáng 1px** (`THREE.LineLoop` theo từng đường viền chữ) ở mép trước. Không còn chrome bạc.
- Dưới chữ ký: 6 nghề (Social Media, Planner, Photographer, Editor, Content Creator, Copywriter), rê chuột hoặc chạm thì từng chữ nảy lên; câu "Anything you can imagine." giải mã chữ khi vào trang. Vị trí bám theo đáy chữ 3D qua biến CSS `--sigb`.
- 9 thương hiệu theo thứ tự thời gian, lưới 5×2 (điện thoại 2 cột), bộ đếm "/ 09". Mốc thời gian, vai trò, câu chuyện mới (vi + en) theo ghi chú của chủ dự án.
- Giới thiệu: "Từ nhân viên kho đến Giám Đốc Sáng Tạo"; 4 ô số 05 năm / 06 ngành / 200+ nhân sự / 07M lượt xem (dòng phụ 100K người theo dõi). Đã bỏ "5–7 người" và "2 năm thành điểm đến hàng đầu".
- Kỹ năng: 7 dòng bấm-mở-rộng, mỗi dòng có hình vẽ SVG chuyển động riêng (`SK_ART`, chạy bằng CSS keyframes, dừng khi đóng), mô tả ngắn + thẻ. Đã bỏ ảnh chân dung chạy theo chuột.
- Chức danh: Giám Đốc Sáng Tạo (KAZA) và Marketing Director (Bích Vân Store).

## 2. Gu và quyết định đã chốt (đừng tự ý đổi)

- **Tông:** sáng, chỉ đen, trắng và xám. **Không** có màu nhấn (đã từ chối cả gradient hồng–xanh của Bích Vân Store lẫn màu mới). **Không** có nút đổi giao diện tối/sáng.
- **Phong cách:** tối giản, chuyên nghiệp, "thật công nghệ, hiện đại". Chữ không chân, rộng và đậm kiểu Balenciaga / Fear of God (font Archivo, `font-stretch:125%`, đậm 800–900, viết hoa). Nhãn nhỏ dùng Geist Mono.
- **Chữ ký 3D:** "K THE GOAT" khối 3D **đen nhám có viền sáng mảnh** (chủ dự án chê chrome bạc "hơi đau mắt"), xuất hiện ở màn đầu và chân trang. Chủ dự án **đã chê font gothic (blackletter)** nên giờ dùng chính font Archivo. Không dùng logo hay họa tiết của Chrome Hearts.
- **Tên:** tên lớn là **K THE GOAT**, các chỗ khác gọi **NamK**, tên thật **Y Nam Knul**.
- **Không** dùng con trỏ chuột tùy biến. Trang phải nhẹ và mượt trên điện thoại.
- **Giọng văn:** kể ngắn, tinh thần "không ngại thử thách". Chủ dự án nói: "kể dài dòng cũng có ai đọc đâu".
- **Dog & Duck** phải giữ trong dòng thời gian dù đã đóng cửa ("nó có xấu thì cũng là của mình").
- **Thẩm mỹ:** chủ dự án rất khắt khe về độ hoàn thiện ("hoặc là phải chỉn chu, hoặc là không có gì hết"). Lần trước chủ dự án chê "còn hơi ít hiệu ứng, chưa Pro, hơi tối giản thái quá, thiếu element", sau đó bản 2 nhiều chi tiết hơn mới được duyệt. Đừng lùi lại về hướng trống trải.
- **Gu cá nhân (để lấy cảm hứng):** thời trang Balenciaga, Fear of God, Chrome Hearts; đồng hồ Rolex (vòng vạch kiểu viền đồng hồ ở màn đầu là cái gật đầu với Rolex); con người hip-hop nhưng tiết chế vì làm marketing.
- **Trang mẫu tham khảo:** haoqi.design (3D, cuộn liền mạch, đoạn tunnel tia sáng, chữ nhiễu rồi giải mã) và voyeurverite.com (2D, ảnh trong khối đa giác đổi hình khi cuộn, chữ lớn). Học chuyển động, không sao chép bố cục hay tài sản.

## 3. Nội dung và dữ kiện (chỉ dùng những gì chủ dự án đã nói)

- **2021:** vào **Bích Vân Store** (fanpage bán đồ Apple) làm nhân viên kho, tự học Digital Marketing. Hai năm một mình xử lý mọi thứ (auto-reply khách hàng, nâng cấp hình ảnh, đổi logo), rồi mới có đội 2–3 người. Vẫn làm đến nay.
- **2022:** **Cốm Natural** (café · camping) và **Embé** (logo ghi "Embé — For baby and Mom", chủ dự án gọi là Embes, thời trang trẻ em).
- **2023:** **Kimmy Cuisine & Lounge** (fine dining).
- **2024:** **Meow Billiards** (chuỗi billiard toàn quốc, cơ sở Buôn Ma Thuột).
- **10/2024 đến nay:** **KAZA** (slogan trên logo: "Keep All Zeal Alive"). Bắt đầu làm theo đội, quản lý đội 5–7 người. Một thương hiệu mới mở, chỉ trong khoảng 2 năm đã thành một trong những điểm ăn chơi hàng đầu thành phố.
- **12/2024 – 05/2025:** **Dog & Duck** (quán bar local nhỏ, đã đóng cửa).
- Ở các thương hiệu trước KAZA, chủ dự án là nhân viên Social Media làm một mình toàn bộ: lên kế hoạch, chụp, sửa hình, viết bài, đăng bài.
- **Hiện tại:** Giám Đốc Sáng Tạo của KAZA và Marketing Director của Bích Vân Store.
- **Mốc thời gian chuẩn (mới nhất, thay các mốc ở trên):** Bích Vân 2021–nay; Cốm 01–04/2023; Kimmy và ZOJY 02–06/2024; Embé 03–04/2024; ASTRO 08–09/2024; Meow 02.09.2024–31.08.2025; KAZA từ 13.10.2024; Dog & Duck 12/2024–05/2025.
- **Liên hệ công khai** (chủ dự án đã cho phép hiển thị): SĐT 0706 034 567, email kthegoat.info@gmail.com.
- **Phần Kỹ năng** là bản nháp do Claude viết, chủ dự án chưa sửa từng dòng.

Brief gốc (câu trả lời đầu tiên của chủ dự án) nằm ở `_project/brief-original.txt`.

## 4. Cấu trúc kho

```
index.html                 Toàn bộ trang: CSS, HTML, JS trong một file (~1100 dòng)
img/                       25 ảnh đang dùng (đã nén 1800px, ~150KB/ảnh)
logos/                     7 logo đã chuyển sang đen trên nền trong suốt
_project/                  Tài liệu dự án, KHÔNG deploy (xem .vercelignore)
  brief-original.txt       Câu trả lời brief đầu tiên của chủ dự án
  photos-unused/           25 ảnh còn lại (đã nén), dùng khi cần thay ảnh
  logos-original/          Logo gốc có màu do chủ dự án gửi
  tools/process_logos.py   Tạo lại logos/*.png từ logo gốc
  tools/prep_photos.py     Nén ảnh gốc từ máy ảnh xuống cỡ web
  tools/test/              Bộ test bố cục chạy offline (thư viện giả)
```

### Thư viện (CDN, khóa phiên bản)
- GSAP 3.12.5 + ScrollTrigger (cdnjs)
- Lenis 1.1.13 (jsDelivr): cuộn mượt
- three.js 0.160.0 (jsDelivr, ES module qua importmap) + `BufferGeometryUtils.toCreasedNormals`
- Google Fonts: Archivo (trục wdth 62–125, wght 100–900) và Geist Mono

### Thứ tự các mục trên trang
1. **Hero** (`#hero`): chữ chrome 3D, vòng vạch viền đồng hồ, lưới chấm, các nhãn ở góc. Mục này bị ghim (`pinSpacing:false`) để mục Giới thiệu trượt lên che, đồng thời các chữ cái tách ra bay đi.
2. **Giới thiệu** (`#about`): mép trên cắt chéo, 2 dải chữ chạy ngang, tiêu đề hiện từng chữ cái, ảnh `img_9651` trong khối đa giác có đường viền đi theo, đoạn văn sáng dần từng từ, 4 con số đếm lên.
3. **Thương hiệu** (`#brands`): lưới 4×2 gồm 7 logo và 1 ô kêu gọi "Thương hiệu tiếp theo?". Rê chuột vào ô thì ô chuyển đen.
4. **Dự án** (`#work`): ghim, 7 chương. Ảnh đổi hình khối đa giác, đường viền SVG đi theo, tên thương hiệu cỡ lớn dạng chữ viền chạy phía sau, logo + năm + tên + vai trò + mô tả, thanh tiến độ theo năm, số đếm 01/07.
5. **Tunnel** (`#tun`): canvas 2D vẽ tia sáng xám, câu "Không ai dọn đường. Mình tự mở."
6. **Đội nhóm** (`#team`): ghim, dải 10 ảnh trượt ngang, nghiêng theo tốc độ cuộn.
7. **Kỹ năng** (`#skills`): 7 dòng. Rê chuột thì chữ cuộn lên và ảnh chân dung nhỏ đi theo chuột.
8. **Liên hệ** (`#contact`): tiêu đề chữ nhiễu rồi giải mã, SĐT và email (nút Gọi, Gửi mail, Chép), dải chữ chạy, chữ chrome 3D ở chân trang.

**Lớp phủ toàn trang:** nhiễu hạt (grain), 7 đường lưới dọc mờ, thanh menu (có nền mờ sau khi qua màn đầu), thanh nhỏ ở góc dưới (desktop) hiện mục hiện tại, tọa độ chuột và phần trăm đã cuộn. Màn chờ đếm 000 → 100.

## 5. Sửa nội dung ở đâu (trong `index.html`)

- **`BRANDS`** (khoảng dòng 434): tên, logo, **ảnh của từng chương** (`img`), năm.
- **`TEAM_IMG`**: danh sách ảnh dải đội nhóm.
- **`I18N.vi` / `I18N.en`**: toàn bộ chữ trên trang. Mỗi thuộc tính phải có ở **cả hai** ngôn ngữ. Các mảng `period`, `role`, `desc`, `br_kind` phải đúng **9 phần tử** theo thứ tự `BRANDS`; `skills` có 7 phần tử dạng `[tên, dòng ngắn, mô tả, thẻ[]]` khớp với 7 hình trong `SK_ART`. `POLY` cần đủ 9 hình đa giác.
- **Thêm ngôn ngữ** (chủ dự án muốn sau này có Trung, Hàn, Nhật, Pháp, Tây Ban Nha):
  1. Thêm `I18N.zh` (v.v.) với đủ các khóa.
  2. Thêm nút `<button data-lang="zh">` trong `.lang`.
  3. Trong code đọc ngôn ngữ đã lưu, đổi điều kiện `if (s === 'vi' || s === 'en')` để chấp nhận mã mới.
  4. Archivo không có chữ Hán/Hàn/Nhật nên sẽ rơi về font hệ thống. Cần thêm một font phù hợp (ví dụ Noto Sans) và kiểm tra lại chữ rộng.
  5. Nên nhờ người bản xứ soát lại bản dịch.
- **Ảnh chính mục Giới thiệu:** `img/img_9651.jpg`, do chủ dự án chỉ định.

## 6. Kỹ thuật 3D và các bẫy đã gặp

- Chữ chrome không dùng file font 3D. Hàm `contourLetters()` vẽ chữ lên canvas 2D, dò đường viền bằng marching squares (nội suy theo alpha), đơn giản hóa bằng Douglas–Peucker, rồi gom từng vòng viền về đúng chữ cái và tạo `THREE.ExtrudeGeometry` cho **từng chữ** (để làm hiệu ứng bay vào và tách ra). Vật liệu là `MeshStandardMaterial` với metalness 1, roughness 0.1, môi trường phản chiếu là một "studio" tự dựng trong `makeEnv()` bằng PMREM.
- **Bẫy 1, lỗ chữ bị lấp:** chiều vẽ của đường viền ngoài và đường viền lỗ phải ngược nhau. Hàm `orient()` ép viền ngoài theo chiều kim đồng hồ và lỗ ngược chiều. Đừng xóa nó.
- **Bẫy 2:** gờ vát dùng `bevelOffset: -bevelSize` để không bóp lỗ chữ O và A.
- Font phải tải xong trước khi dựng (`document.fonts.load('expanded 900 100px Archivo')`), nếu không chữ 3D sẽ ra font dự phòng. Trên màn hẹp (tỉ lệ dưới 0.9) chữ xuống 2 dòng "K THE / GOAT".
- **Mục Dự án:** timeline dùng `STEP = 2.2` và `FIRST = 1.0`. Nếu rút ngắn khoảng dừng, chữ của chương sẽ biến mất trước khi kịp đọc (lỗi đã gặp). Số đếm cập nhật qua `tl.eventCallback('onUpdate')`; không dùng `onUpdate` của ScrollTrigger vì có độ trễ scrub.
- **Các bẫy CSS khác:**
  - `.strip img` cần `max-width:none`, nếu không ảnh đội nhóm co về 0.
  - Nút cần `text-transform:inherit`.
  - `.ln` có padding trên 0.2em để dấu tiếng Việt trên chữ in hoa (Ừ, Ế, Đ) không bị cắt; khi trang ở tiếng Việt, `line-height` của `.disp` là 1.02.
- Ảnh dùng `filter: grayscale(1)` bằng CSS; ảnh gốc vẫn có màu.

## 7. Cách kiểm tra (quan trọng)

- **Môi trường cloud của Claude thường KHÔNG truy cập được CDN** (jsDelivr, cdnjs, Google Fonts, npm đều bị chặn). Vì vậy:
  - **Kiểm tra bố cục và lỗi code offline:** `NODE_PATH=$(npm root -g) node _project/tools/test/run.js`. Lệnh dùng thư viện giả, chụp toàn trang desktop và điện thoại, báo tràn ngang. Lệnh này không chạy chuyển động thật hay WebGL.
  - **Thư viện thật + WebGL ngay trong cloud:** CDN bị chặn nhưng GitHub thì không. Xem hướng dẫn đầu file `_project/tools/test/run-real.js` (clone three.js r160, GSAP 3.12.5, font Archivo/Geist Mono từ GitHub), rồi chạy `LIBS=... node _project/tools/test/run-real.js`: render chữ 3D thật bằng SwiftShader, chụp màn đầu, lưới thương hiệu, chương dự án, Kỹ năng, một trang dự án (máy tính + điện thoại). Lenis vẫn là bản giả.
  - **Lưu ý:** ngày 29/10/2026 Chrome trên máy chủ dự án báo WebGL bị tắt ("GL_VENDOR = Disabled"), nên chữ 3D rơi về chữ dự phòng phẳng khi xem qua Chrome đó. Không phải lỗi code. Bật lại: chrome://settings → Hệ thống → "Dùng tăng tốc đồ hoạ", hoặc khởi động lại Chrome.
  - **Trang dự án offline:** `NODE_PATH=$(npm root -g) node _project/tools/test/run-case.js` mở trang KAZA (chế độ giảm chuyển động) và chụp toàn bộ, ra `case-desk.png`, `case-mob.png`.
  - **Xem chuyển động thật trước khi lên production:** push lên một nhánh khác `main` (ví dụ `kaza-case`) → Vercel tạo bản xem trước tại `https://kthegoat-git-<tên-nhánh>-namkzhongli-3019.vercel.app` (mở được trong Chrome của chủ dự án vì đã đăng nhập Vercel). Muốn xem khung điện thoại khi cửa sổ không thu nhỏ được: thay trang bằng một `<iframe>` 390×844 trỏ về chính trang đó. Muốn chụp giữa chuyển động: `gsap.globalTimeline.timeScale(0.12)`.
  - **Kiểm tra thật:** push lên `main`, đợi khoảng 10 giây để Vercel deploy, rồi mở https://kthegoat.vercel.app trong trình duyệt của app Claude trên máy chủ dự án (trang đã được cho phép). Thêm `?v=số` để tránh cache, đọc console, dùng `resize_window` để thử 1440×900 và khung điện thoại, rồi nhớ đặt lại.
- `index.html` trong kho là trang HTML đầy đủ (có `<!doctype>` và `<head>`). Nếu muốn dựng lại một bản xem thử artifact trong chat, hãy bỏ phần bao ngoài đó và đăng kèm thư mục `img/` và `logos/`.
- **Commit:** tác giả `NamK <kthegoat.info@gmail.com>`. Chỉ push sau khi đã kiểm tra.

## 8. Việc còn dang dở và gợi ý tiếp theo

0. Chủ dự án duyệt lại ảnh và câu chữ của 8 trang dự án (đã chọn tạm). Embé chưa có trang vì không có tư liệu; chương Embé vẫn dùng ảnh studio `art-14`.
1. Meow: "giải lớn nhất" chưa rõ phạm vi (thành phố hay hệ thống), hiện ghi "giải lớn nhất mình từng tổ chức ở đây".
2. **Phần Kỹ năng:** chủ dự án chưa duyệt từng dòng.
3. **Thêm ngôn ngữ** Trung, Hàn, Nhật, Pháp, Tây Ban Nha (xem mục 5).
4. **Tên miền riêng** (nếu chủ dự án muốn).
5. **Chưa làm:** ảnh chia sẻ (Open Graph) khi gửi link qua Facebook/Zalo, `meta description`, favicon. Nên làm sớm vì chủ dự án làm marketing, link sẽ được chia sẻ nhiều.
6. **Chưa thử trên điện thoại thật** (mới thử bằng khung giả lập trong trình duyệt). Nên nhờ chủ dự án mở trên iPhone và cho biết độ mượt.
7. **Có thể tối ưu thêm:** chuyển ảnh sang WebP, thêm `width`/`height` cho ảnh, tải trễ three.js.

## 9. Kho ảnh (`img/` và `_project/photos-unused/`)

- `img_9648` → `img_9660`: chân dung studio, nền xanh xám, áo sơ mi sọc, tóc bạch kim, kính, đồng hồ.
- `img_7375` → `img_7383`: chân dung studio, nền tím nhạt, mũ Balenciaga, áo khoác thể thao đen sọc trắng.
- `art-11`, `art-12`, `art-14`, `art-15`: bóng người đen trước rèm sọc trắng (rất "đen trắng").
- `dscf1762` → `dscf2080`: hậu trường buổi chụp đội nhóm trong studio trắng, mọi người mặc đồ đen.
- `bomb8976` → `bomb9251`: quán bar tối, DJ, đám đông.
- `ktg-08`, `ktg-11`: NamK đứng giữa một nightclub đông người, sàn kính phát sáng.
