# Bài Tập Thực Tập: Phân Tích Mock Data Dashboard (Tập trung UI + thao tác mảng nâng cao)

## Mục tiêu (tập trung UI + thao tác mảng thực tế)

Mục tiêu của bài tập được nâng cấp để rèn luyện sâu về thao tác mảng JavaScript (map, filter, reduce, find, some, every, includes, sort, slice, concat, flat, flatMap, v.v.) trong ngữ cảnh dashboard thực tế. Học viên phải sử dụng ít nhất 10 hàm mảng khác nhau, kết hợp với UI tương tác để hiển thị kết quả động, tối ưu hiệu năng, và xử lý edge cases.

## Yêu cầu chính (UI + thao tác mảng nâng cao)

1. Mở rộng mock data thực tế
   - Thêm ít nhất 5 users, 20+ sessions, 50+ events vào `src/features/user/data/mockStats.ts`.
   - Bao gồm nested data (ví dụ: events trong sessions), và dữ liệu đa dạng (dates, revenues, types).

2. Tạo component UI dùng đa dạng thao tác mảng
   - **SessionList**: Sử dụng `map` để render danh sách sessions; `filter` theo trạng thái; `sort` theo thời gian/revenue; `slice` cho phân trang; `find` để highlight session cụ thể.
   - **ConversionSummary**: Dùng `reduce` để tính tổng hợp (totalEvents, totalRevenue, avgEventsPerUser, conversionRate); `some`/`every` để phân loại users; `flatMap` nếu có nested events; `includes` để kiểm tra event types.
   - **InteractiveFilters**: Cho phép tìm kiếm (`find`/`filter`), sort (`sort`), phân trang (`slice`), merge filters (`concat`); sử dụng `flat` nếu cần flatten data.
   - **UserSegmentation**: Phân loại users thành segments (active, passive, trial-only) dùng `filter`/`some`/`every`; hiển thị charts với `map`/`reduce`.
   - **EventTimeline**: Sử dụng `sort` để timeline; `findIndex` để vị trí events; `concat` để merge timelines từ nhiều users.

3. Code yêu cầu cho thao tác mảng (ít nhất 10 hàm khác nhau)
   - `map`: Transform data (e.g., format dates, calculate derived fields).
   - `filter`: Lọc theo criteria (date range, event type, user status).
   - `reduce`: Gom thống kê (totals, averages, maps).
   - `find`/`findIndex`: Tìm item cụ thể hoặc vị trí.
   - `some`/`every`: Kiểm tra conditions cho segments.
   - `includes`: Membership checks (e.g., event types).
   - `sort`: Sắp xếp theo multiple criteria.
   - `slice`: Phân trang, giới hạn results.
   - `concat`: Merge arrays (e.g., combine filters).
   - `flat`/`flatMap`: Handle nested structures.
   - Tất cả phải bất biến (immutable), không mutate nguồn.

4. Hiệu năng & React nâng cao
   - Dùng `useMemo` cho tất cả calculations; `useCallback` cho event handlers.
   - Implement virtualization cho lists lớn (e.g., 100+ items) dùng `slice` và lazy loading.
   - Debounce search inputs để tránh re-calculations liên tục.

5. Test & chấp nhận
   - Unit tests cho tất cả hàm xử lý mảng (normal, edge cases: empty arrays, large data).
   - Integration tests cho components với @testing-library/react (simulate filters, pagination).
   - Chạy `npm run test` phải pass; thêm performance tests nếu cần.

## Bài tập phân nhỏ (task list nâng cao)

- [ ] Đọc `src/features/user/types.ts` và mock data hiện tại.
- [ ] Chạy `npm run dev`, explore dashboard.
- [ ] Mở rộng mock data: 5+ users, nested sessions/events, đa dạng types.
- [ ] Viết `ConversionSummary`: Dùng `reduce`/`flatMap`/`some` để tính metrics; memoize.
- [ ] Viết `SessionList`: `map`/`filter`/`sort`/`slice` cho list với pagination; `find` để search.
- [ ] Viết `InteractiveFilters`: `concat` filters; `includes` cho multi-select; debounce.
- [ ] Viết `UserSegmentation`: `filter`/`some`/`every` cho segments; `map` để render.
- [ ] Viết `EventTimeline`: `sort`/`findIndex`/`concat` cho timeline view.
- [ ] Định dạng số với Intl; thêm charts (e.g., dùng `reduce` cho data points).
- [ ] Viết tests: Cover 10+ hàm mảng, edge cases (empty, large data).
- [ ] Ghi report: Chiến lược mock data, thuật toán (với code snippets), screenshots, performance notes.

## Tips kỹ thuật nâng cao

- Pure functions: Input -> output, no side effects.
- Chain operations: arr.filter(...).map(...).reduce(...) để tối ưu.
- For large data: Use `slice` early to limit processing.
- Nested data: `flatMap` to flatten before processing.
- Performance: Memoize expensive chains; avoid re-renders with keys.

## Tiêu chí chấm nâng cao

- Completeness: Sử dụng ít nhất 10 hàm mảng, UI tương tác đầy đủ.
- Correctness: Metrics chính xác, immutable operations.
- Code quality: Clean, commented, efficient.
- UI: Responsive, intuitive, handles large data.
- Tests: Comprehensive, including performance.

Chỉ dẫn chạy nhanh:

- Phát triển: npm run dev
- Chạy test: npm run test

Chúc học trò wow với bài tập thực tế này — tập trung vào đa dạng hàm mảng và UI động!
