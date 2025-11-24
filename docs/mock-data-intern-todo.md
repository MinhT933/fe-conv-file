# TODO List: Mock Data Dashboard Exercise

## Chuẩn bị

- [ ] Đọc qua file `src/features/user/types.ts` để nắm rõ các kiểu dữ liệu liên quan.
- [ ] Chạy dự án ở chế độ phát triển (`npm run dev`) để quan sát dashboard hiện tại và xác minh dữ liệu mock.

## Mock Data

- [ ] Thêm ít nhất ba phiên người dùng mới vào `userSessions` trong `src/features/user/data/mockStats.ts` với hành vi khác nhau (dày đặc, thưa thớt, chỉ xem thử).
- [ ] Bổ sung thêm các sự kiện mới vào `conversionEvents` bao gồm các bước trong funnel như `add_to_cart`, `start_trial`, `renew_subscription`.
- [ ] Đảm bảo mỗi phần tử mock data tuân thủ interface đã khai báo và có timestamp hợp lệ.

## Thống kê Dashboard

- [ ] Mở rộng hàm `summarizeDashboardMetrics` trong `src/features/user/services/stats.service.ts` để tính thêm ít nhất một thống kê mới.
- [ ] Sử dụng hoàn toàn `map`, `filter`, `reduce` (hoặc các biến thể như `some`, `every` nếu cần) để xử lý dữ liệu.
- [ ] Bổ sung comment ngắn giải thích thuật toán tổng hợp số liệu.

+### Bài tập thao tác mảng (từ cơ bản đến nâng cao)

- +- [ ] **Cơ bản:** map dữ liệu mock sang cấu trúc thống nhất và filter các phần tử thiếu trường bắt buộc.
  +- [ ] **Trung cấp:** kết hợp map/filter/reduce để tính tổng event, doanh thu, số phiên theo từng người dùng; dùng `some`/`every` để gắn nhãn phân khúc.
  +- [ ] **Nâng cao:** viết chuỗi thao tác mảng không mutate dữ liệu gốc, tính chỉ số phức tạp (retention, conversion per cohort) và gom các phép duyệt để tối ưu.
- ## Kiểm thử
  - [ ] Mở rộng file `src/features/user/services/__tests__/stats.service.test.ts` để bao phủ các bộ dữ liệu: bình thường, trống, giá trị cực đoan, phần tử lỗi.
  - [ ] Tổ chức test với `describe`/`it` rõ ràng và dùng factory/helper để giảm lặp lại dữ liệu.
        -- [ ] Đảm bảo `npm run test` chạy thành công và ghi lại kết quả.
        +- [ ] Đảm bảo `npm run test` chạy thành công và ghi lại kết quả (phần cấu hình test chỉ phục vụ việc luyện tập thao tác mảng ở trên, không phải mục tiêu chính).
  ## Giao diện Dashboard
  - [ ] Cập nhật `src/app/(dashboard)/page.tsx` (hoặc component con) để hiển thị thống kê mới dựa trên hàm tổng hợp.
  - [ ] Áp dụng định dạng số phù hợp trên client (Intl.NumberFormat cho tiền tệ, phần trăm, số lớn).
  - [ ] Kiểm tra lại UI sau thay đổi và chụp screenshot gửi kèm báo cáo.
  ## Báo cáo
  - [ ] Viết mô tả ngắn gọn về chiến lược mở rộng mock data và insight thu được.
  - [ ] Đính kèm danh sách test case và kết quả chạy test.
  - [ ] Đưa nhận xét cá nhân về khó khăn, cách khắc phục và đề xuất cải tiến tiếp theo.
- +## Trình tự gợi ý (tham khảo nhanh)
- +- [ ] Đọc types + chạy `npm run dev` để quan sát dashboard và số liệu ban đầu.
  +- [ ] Thiết kế mock data mới (user/session/event) rồi thêm vào `mockStats.ts` theo hướng bất biến.
  +- [ ] Phác pseudo-code cho thống kê mới, triển khai trong `summarizeDashboardMetrics` bằng thao tác mảng thuần.
  +- [ ] Viết test cho từng bộ dữ liệu (bình thường, trống, cực đoan, lỗi) trong `stats.service.test.ts`, chạy `npm run test` để xác
-      nhận.
  +- [ ] Render thống kê mới trên UI, định dạng số và chụp screenshot cho báo cáo.
  s
