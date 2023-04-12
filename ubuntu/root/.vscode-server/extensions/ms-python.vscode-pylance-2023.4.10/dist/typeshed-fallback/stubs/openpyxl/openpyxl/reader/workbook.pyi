from _typeshed import Incomplete
from collections.abc import Generator

from openpyxl.workbook import Workbook

class WorkbookParser:
    archive: Incomplete
    workbook_part_name: Incomplete
    wb: Workbook
    keep_links: Incomplete
    sheets: Incomplete
    def __init__(self, archive, workbook_part_name, keep_links: bool = ...) -> None: ...
    @property
    def rels(self): ...
    caches: Incomplete
    def parse(self) -> None: ...
    def find_sheets(self) -> Generator[Incomplete, None, None]: ...
    def assign_names(self) -> None: ...
    @property
    def pivot_caches(self): ...
