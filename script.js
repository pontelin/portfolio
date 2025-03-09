document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.Box-Container');
    const leftArrows = document.querySelectorAll('.Arrow.left');
    const rightArrows = document.querySelectorAll('.Arrow.right');
    const scrollAmount = 310;

    // 各コンテナの現在位置を保存する配列
    const positions = new Array(containers.length).fill(0);

    // 各コンテナとその矢印にイベントリスナーを設定
    containers.forEach((container, index) => {
        leftArrows[index].addEventListener('click', function() {
            positions[index] = Math.min(0, positions[index] + scrollAmount);
            container.style.transform = `translateX(${positions[index]}px)`;
        });

        rightArrows[index].addEventListener('click', function() {
            const maxScroll = -(container.scrollWidth - container.parentElement.clientWidth);
            positions[index] = Math.max(maxScroll, positions[index] - scrollAmount);
            container.style.transform = `translateX(${positions[index]}px)`;
        });
    });
});
