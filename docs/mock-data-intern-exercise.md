# Bài Tập Thực Tập: Phân Tích Mock Data Dashboard

## Bối cảnh

Nhóm sản phẩm đang thử nghiệm một dashboard phân tích người dùng. Các file mock data và dịch vụ thống kê đã được chuẩn bị sẵn trong codebase để mô phỏng dữ liệu sản phẩm thực tế:

- `src/features/user/data/mockStats.ts`: chứa danh sách phiên người dùng (`userSessions`) và danh sách sự kiện chuyển đổi (`conversionEvents`).
- `src/features/user/services/stats.service.ts`: cung cấp hàm thuần `summarizeDashboardMetrics` dùng `map`, `filter`, `reduce` để tổng hợp dữ liệu dashboard.

## Mục tiêu học tập

1. Hiểu cấu trúc dữ liệu người dùng và sự kiện chuyển đổi.
2. Vận dụng các thao tác mảng nâng cao (map/filter/reduce) để tính toán thống kê.
3. Viết unit test bao phủ nhiều trường hợp dữ liệu khác nhau.
4. Trình bày kết quả trực quan và có định dạng rõ ràng trên giao diện dashboard.

## Yêu cầu bài tập

1. **Mở rộng mock data**
   - Thêm ít nhất 3 người dùng mới vào `userSessions` với các pattern hành vi khác nhau (ví dụ: hoạt động dày đặc, thưa thớt, chỉ xem thử).
   - Bổ sung các sự kiện trong `conversionEvents` để bao phủ thêm nhiều bước trong funnel (thêm hành động như `add_to_cart`, `start_trial`, `renew_subscription`).
   - Đảm bảo mỗi phần tử đều tuân thủ kiểu đã khai báo trong `src/features/user/types.ts`.

2. **Phát triển hàm tổng hợp**
   - Bổ sung thêm một thống kê mới vào `summarizeDashboardMetrics`, ví dụ: tỉ lệ giữ chân (retention rate) hoặc số lượt chuyển đổi trên mỗi người dùng.
   - Sử dụng thuần các phương thức mảng để tính toán, không sử dụng thư viện bên ngoài.
   - Viết tài liệu ngắn gọn trong phần comment giải thích các bước chính của thuật toán.

3. **Viết unit test**
   - Cập nhật `src/features/user/services/__tests__/stats.service.test.ts` để kiểm tra thống kê mới với các bộ dữ liệu: dữ liệu bình thường, dữ liệu trống, dữ liệu có giá trị bất thường (ví dụ: doanh thu cực lớn hoặc timestamp rỗng).
   - Dùng `vitest` và ưu tiên tách các test case bằng `describe` rõ ràng.

4. **Hiển thị trên UI**
   - Cập nhật `src/app/(dashboard)/page.tsx` (hoặc component con nếu cần) để render thống kê mới.
   - Đảm bảo các giá trị được định dạng thân thiện (ví dụ: dùng Intl.NumberFormat cho tiền tệ, phần trăm).

## Yêu cầu báo cáo

- Mô tả ngắn gọn chiến lược mở rộng mock data và lý do chọn các pattern hành vi.
- Đính kèm screenshot dashboard sau khi bổ sung thống kê mới.
- Nêu rõ các trường hợp test đã bao phủ và các edge case quan trọng.

## Gợi ý đánh giá

- Điểm tối đa khi thực tập sinh triển khai đủ yêu cầu, viết code sạch, có comment rõ ràng và test chạy thành công.
- Điểm cộng nếu xây dựng thêm biểu đồ, bảng chi tiết hoặc insight phụ trợ.

Chúc bạn hoàn thành bài tập và hiểu sâu hơn về cách làm việc với mock data trong dự án!
