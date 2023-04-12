from typing import Any, Optional

def arg_byref(args: Any, offset: int = ...) -> Any: ...
def ptr_byref(args: Any, offset: int = ...) -> Any: ...
def check_const_string(
    result: Any, func: Any, cargs: Any, offset: Optional[Any] = ..., cpl: bool = ...
) -> Any: ...
def check_string(
    result: Any, func: Any, cargs: Any, offset: int = ..., str_result: bool = ...
) -> Any: ...
def check_envelope(result: Any, func: Any, cargs: Any, offset: int = ...) -> Any: ...
def check_geom(result: Any, func: Any, cargs: Any) -> Any: ...
def check_geom_offset(result: Any, func: Any, cargs: Any, offset: int = ...) -> Any: ...
def check_srs(result: Any, func: Any, cargs: Any) -> Any: ...
def check_arg_errcode(result: Any, func: Any, cargs: Any, cpl: bool = ...) -> Any: ...
def check_errcode(result: Any, func: Any, cargs: Any, cpl: bool = ...) -> None: ...
def check_pointer(result: Any, func: Any, cargs: Any) -> Any: ...
def check_str_arg(result: Any, func: Any, cargs: Any) -> Any: ...