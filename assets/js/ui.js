// 파일 선택시 파일명
$("[data-upload-file]").on("change", function () {
  var fileName = $(this).val().split('/').pop().split('\\').pop();
  $(this).siblings('[data-upload-file-name]').text(fileName);
})

// 탭 구현
$('[data-tab]').on('click', function () {
  var tabs = $(this).parent('.tabs').attr('id');
  var content = $(this).attr('data-tab');
  var contents = $(`#${content}`).parent('.tab-content-container').attr('id');
  $(`#${tabs} [data-tab]`).removeClass('active');
  $(this).addClass('active');
  $(`#${contents} .tab-content`).removeClass('active');
  $(`#${content}`).addClass('active');
})