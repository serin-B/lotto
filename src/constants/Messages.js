export const MESSAGE = Object.freeze({
  GET_PURCHASE_AMOUNT: `구입금액을 입력해 주세요.\n`,
  GET_WINNING_NUMBER: `\n당첨 번호를 입력해 주세요.\n`,
  GET_BONUS_NUMBER: `\n보너스 번호를 입력해 주세요.\n`,
  SHOW_PURCHASE_HISTORY: (number) => `${number}개를 구매했습니다.`,
  SHOW_RESULT: ({ first, second, third, fourth, fifth }) =>
    `\n당첨 통계\n---\n3개 일치 (5,000원) - ${fifth}개\n4개 일치 (50,000원) - ${fourth}개\n5개 일치 (1,500,000원) - ${third}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개\n6개 일치 (2,000,000,000원) - ${first}개`,
  SHOW_PROFIT: (profit) => `총 수익률은 ${profit}%입니다.`,
});

export const ERROR_MESSAGE = Object.freeze({
  INVALID_PURCHASE_AMOUNT: `[ERROR] 구입금액은 1000단위 숫자로만 입력 가능합니다.\n`,
  EXCEED_MAX_PURCHASE_AMOUNT: `[ERROR] 로또는 최대 100000원 까지만 구입 가능합니다.\n`,
  WRONG_LOTTO_NUMBER: `[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.\n`,
  WRONG_LOTTO_LENGTH: `[ERROR] 로또 번호는 6개여야 합니다.\n`,
  DUPLICATE_LOTTO_NUMBER: `[ERROR] 로또 번호는 중복될 수 없습니다.\n`,
  WRONG_BONUS_NUMBER: `[ERROR] 보너스 번호는 1부너 45 사이의 숫자여야 합니다.\n`,
  DUPLICATE_BONUS_NUMBER: `[ERROR] 보너스 번호는 로또 번호와 중복되지 않게 입력해주세요.\n`,
});
