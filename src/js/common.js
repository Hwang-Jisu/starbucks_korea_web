// search 부분의 포커스가 적용되면 search 영역의 넓이 값이 변경되고 동시에 통합 검색이 표시되도록 처리
// 포커스가 해제되면 넓이 값이 축소되고 통합 검색도 빈 문자열로 처리
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  searchInputEl.focus();
});
searchInputEl.addEventListener('focus',function() {
  searchEl.classList.add('focused');
  this.setAttribute('placeholder','통합 검색');
});
searchInputEl.addEventListener('blur',function() {
  searchEl.classList.remove('focused');
  this.setAttribute('placeholder','');
});

// footer year
const thisYear = document.querySelector('footer .this-year');
thisYear.textContent = new Date().getFullYear();
